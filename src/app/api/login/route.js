import { User } from "@/app/models/User";
import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    

    const {data} = await req.json();
    
    
    let { email, password } = data;
    
    
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    if (!password?.length || password.length < 8) {
      // new Error("password must be at least 8 characters");
      return NextResponse.json(
        { message: "password must be at least 8 characters" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({status : 201,
                                body:existingUser,
                                message: "Successfuly Logged In"}, { status: 201 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await new User({
      email,
      password: hashedPassword,
    }).save();

    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
