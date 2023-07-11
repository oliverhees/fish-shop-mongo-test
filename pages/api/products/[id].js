import dbConnect from "@/db/connect";
import Product from "@/db/models/schema";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  //const product = await Product.findById(id); //find((product) => product.id === id);
  const product = await Product.findById(id).populate("reviews");

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
