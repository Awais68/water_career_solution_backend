import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  size_litter: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.models.Stock || mongoose.model("Stock", stockSchema);
export default stockSchema;
