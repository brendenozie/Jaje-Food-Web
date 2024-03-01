import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    userName: String,
    userEmail: String,
    phone: String,
    streetAddress: String,
    postalCode: String,
    city: String,
    country: String,
    cartProducts: Object,
    paid: { type: Boolean, default: false },
    couponAmount:String,
    couponNumber:String,
    tax:String,
    totalPrice:String,
    status:String,
  },
  { timestamps: true }
);

export const Order = models?.Order || model("Order", orderSchema);
