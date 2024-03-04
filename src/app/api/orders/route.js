import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Order } from "@/app/models/Order";
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "@/app/api/auth/[...nextauth]/options";

export async function GET(req) {
  try {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    const session = await getServerSession(authOptions);
    let userEmail = session?.user?.email;
    const admin = await isAdmin();

    const url = new URL(req.url);
    const _id = url.searchParams.get("_id");

    const page = url.searchParams.get("page") ? url.searchParams.get("page") : "1";

    const perPage = 10;
    var skip = page > 1 ? page *perPage : 0;

    userEmail = url.searchParams.get("userEmail") ? url.searchParams.get("userEmail") : userEmail;

    if (_id) {

      const count = await Order.countDocuments(_id);
      var next = page * perPage > count ? 0 : page + 1;

      const orders = await Order.findById(_id).limit(perPage)
      .skip(skip)
      .sort({name: 'asc'})

      return NextResponse.json({ body: orders},{message: "Something went wrong"}, {status: 200 }, {info : {
        count: count,
        next: next,
        pages: 10,
        prev: page-1
    }});

    }
    

    if (admin) {

      const count = await Order.countDocuments();
      var next = page * perPage > count ? 0 : page + 1;

      const orders = await Order.findById().limit(perPage)
      .skip(skip)
      .sort({name: 'asc'});

      return NextResponse.json({ body: orders},{message: "Something went wrong"}, {status: 200 },{info : {
        count: count,
        next: next,
        pages: 10,
        prev: page-1
    }});
    }

    if (userEmail) {

      const count = await Order.countDocuments({ userEmail });
      var next = page * perPage > count ? 0 : page + 1;

      const orders = await Order.find({ userEmail }).limit(perPage)
      .skip(skip)
      .sort({name: 'asc'})

      return NextResponse.json({ body: orders},{message: "Something went wrong"}, {status: 200 }, {info : {
        count: count,
        next: next,
        pages: 10,
        prev: page-1
    }});
    }

      const count = await Order.countDocuments();
      var next = page * perPage > count ? 0 : page + 1;

      const orders = await Order.find().limit(perPage)
      .skip(skip)
      .sort({name: 'asc'});

      return NextResponse.json(orders);
    

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    

    const {data} = await req.json();
       
    
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    if (data) {
      return NextResponse.json(await Order.find({ data }), { status: 200 , message : "Success" });
    }

    return NextResponse.json(
      { message: "No Orders" },
      { status: 400 }
    );
   
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
