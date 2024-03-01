import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { MenuItem } from "@/app/models/MenuItem";
import { Order } from "@/app/models/Order";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
const stripe = require("stripe")(process.env.STRIPE_SK);

export async function POST(req) {
  try {
    let {
      phone_number,
      userName,
      userEmail,
      street_address,
      postal_code,
      city,
      country,
      cartProductsClient,
      coupon_amount,
      coupon_number,
      tax,
      totalPrice
    } = await req.json();

    const session = await getServerSession(authOptions);

    userEmail = session?.user?.email?session?.user?.email:userEmail;

    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);

    const orderDoc = await new Order({
      userName,
      userEmail,
      phone: phone_number,
      streetAddress: street_address,
      postalCode: postal_code,
      city,
      country,
      cartProducts: cartProductsClient,
      paid: false,
      couponAmount:coupon_amount,
      couponNumber:coupon_number,
      tax,
      totalPrice
    }).save();

    return NextResponse.json(orderDoc, { status: 200,message:"Successful" });

    const stripeLineItems = [];
    for (const cartProduct of cartProductsClient) {
      //We will recalculate the price from the DB (security reason :don't trust sent req)
      const productInfo = await MenuItem.findById(cartProduct._id);

      let productPrice = productInfo.basePrice;

      if (cartProduct.size) {
        const size = productInfo.sizes.find(
          (size) => size._id.toString() === cartProduct.size._id.toString()
        );
        productPrice += size.price;
      }
      if (cartProduct.extras?.length > 0) {
        for (const cartProductExtraThing of cartProduct.extras) {
          const productExtras = productInfo.extraIngredientPrices;
          const extraThingInfo = productExtras.find(
            (extra) =>
              extra._id.toString() === cartProductExtraThing._id.toString()
          );
          productPrice += extraThingInfo.price;
        }
      }



      const productName = cartProduct.name;

      stripeLineItems.push({
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: productName,
          },
          unit_amount: productPrice * 100,
        },
      });
    }

    const stripeSession = await stripe.checkout.sessions.create({
      line_items: stripeLineItems,
      mode: "payment",
      customer_email: userEmail,
      success_url:
        process.env.NEXTAUTH_URL +
        "orders/" +
        orderDoc._id.toString() +
        "?clear-cart=1",
      cancel_url: process.env.NEXTAUTH_URL + "cart?canceled=1",

      metadata: { orderId: orderDoc._id.toString() },
      payment_intent_data: {
        metadata: { orderId: orderDoc._id.toString() },
      },
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Delivery fee",
            type: "fixed_amount",
            fixed_amount: { amount: 500, currency: "USD" },
          },
        },
      ],
    });

    return NextResponse.json(stripeSession.url, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
