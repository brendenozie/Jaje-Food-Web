import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Category } from "@/app/models/Category";

export async function POST(req) {
  try {
    const { name } = await req.json();

    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    if (!name) {
      return NextResponse.json(
        { message: "Category name is required" },
        { status: 400 }
      );
    }

    const existingName = await Category.findOne({ name });
    if (existingName) {
      return NextResponse.json(
        { message: "Category name already exists" },
        { status: 400 }
      );
    }
    const createdCategory = await new Category({ name }).save();
    return NextResponse.json(createdCategory, { status: 201 });
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

    const perPage = 10;
    var skip = page > 1 ? page *perPage : 0;//page * (perPage - 1);

    const count = await Category.countDocuments();
    var next = page * perPage > count ? 0 : page + 1;

    const categories = await Category.find().limit(perPage)
          .skip(skip)
          .sort({name: 'asc'});

    return NextResponse.json({results: categories}, { status: 200 },{info : {
                                count: count,
                                next: next,
                                pages: 10,
                                prev: page-1
                            }});
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
