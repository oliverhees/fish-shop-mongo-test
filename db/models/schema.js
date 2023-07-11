// db/models/Joke.js
import mongoose from "mongoose";
import Review from "./reviewSchema";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [mongoose.Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
