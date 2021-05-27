import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    body: { type: String, required: true },
    description: { type: String, required: true },
    username: { type: String, required: true },
    imgURL: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("products", Product);
