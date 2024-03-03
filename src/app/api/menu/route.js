import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { MenuItem } from "@/app/models/MenuItem";

export async function POST(req) {
  try {
    const {
      name,
      image,
      description,
      basePrice,
      category,
      sizes,
      extraIngredientPrices,
    } = await req.json();
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    if (!name) {
      return NextResponse.json(
        { message: "Menu item name is required" },
        { status: 400 }
      );
    }

    const existingName = await MenuItem.findOne({ name });
    if (existingName) {
      return NextResponse.json(
        { message: "Menu item  name already exists" },
        { status: 400 }
      );
    }

    const createdMenu = await new MenuItem({
      name,
      image,
      description,
      basePrice,
      category,
      sizes,
      extraIngredientPrices,
    }).save();

    return NextResponse.json(createdMenu, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    const url = new URL(req.url);
    const page = url.searchParams.get("page") ? url.searchParams.get("page") : "1";
    const category = url.searchParams.get("category") ? url.searchParams.get("category") : "";
    const name = url.searchParams.get("name") ? url.searchParams.get("name") : "";

    const perPage = 10;
    var skip = page > 1 ? page *perPage : 0;


    if (category && name) {

      const count = await MenuItem.countDocuments({$and: [
            { name: { $regex: name } },
            { category }, ] });
      var next = page * perPage > count ? 0 : page + 1;

      const menu_items = await MenuItem.find({$and: [
            { name: { $regex: name } },
            { category }, ] }
          ).populate("category")
          .limit(perPage)
          .skip(skip)
          .sort({name: 'asc'});

      return NextResponse.json({results: menu_items}, { status: 200 }, {info : {
                            count: count,
                            next: next,
                            pages: 10,
                            prev: page-1
                        }});
    }

    if (category) {

      const count = await MenuItem.countDocuments({category});
      var next = page * perPage > count ? 0 : page + 1;

      const menu_items = await MenuItem.find({category}).populate("category")
          .limit(perPage)
          .skip(skip)
          .sort({name: 'asc'});
      return NextResponse.json({results: menu_items}, { status: 200 }, {info : {
                            count: count,
                            next: next,
                            pages: 10,
                            prev: page-1
                        }});
    }

    if (name) {

      const count = await MenuItem.countDocuments({ name : {$regex : name } });
      var next = page * perPage > count ? 0 : page + 1;

      const menu_items = await MenuItem.find({ name : {$regex : name } }).populate("category")
          .limit(perPage)
          .skip(skip)
          .sort({name: 'asc'});

      return NextResponse.json({results: menu_items}, { status: 200 }, {info : {
                            count: count,
                            next: next,
                            pages: 10,
                            prev: page-1
                        }});

    }

    const count = await MenuItem.countDocuments();
    var next = page * perPage > count ? 0 : page + 1;

    const menu_items = await MenuItem.find().populate("category")
          .limit(perPage)
          .skip(skip)
          .sort({name: 'asc'});
          
    return NextResponse.json({results: menu_items}, { status: 200 }, {info : {
                            count: count,
                            next: next,
                            pages: 10,
                            prev: page-1
                        }});

  } catch (error) {
    return NextResponse.json(
      {error:error},
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
