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

    userEmail = url.searchParams.get("userEmail") ? url.searchParams.get("userEmail") : userEmail;

    if (_id) {
      return NextResponse.json(await Order.findById(_id));
    }

    if (admin) {
      return NextResponse.json({ body: await Order.find() },
                          { message: "Something went wrong" },
                          { status: 500 });
    }

    if (userEmail) {
      return NextResponse.json({ body: await Order.find({ userEmail })},{ message: "Something went wrong" },
      { status: 500 });
    }
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
