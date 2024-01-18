import { Schema, model, models } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    image: {type:String}
  },
  { timestamps: true }
);

export const Category = models?.Category || model("Category", categorySchema);