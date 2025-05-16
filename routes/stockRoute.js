import express from "express";
import cors from "cors";
import stockModel from "../models/stockSchema.js";

const stockRouter = express.Router();

stockRouter.post("/stock", async (req, res) => {
  try {
    const size_litter = req.body;
    if (!size_litter) {
      console.log("Invalid Service");
    }
    const newOrder = new order({
      price,
      size_litter,
      quantity,
    });
    const order = await newOrder.save();
    if (order) {
      console.log("Order placed Successfully!!!");
    } else {
      console.log("Not Created Sorry!");
    }
  } catch (error) {
    console.log("error", error, "msg ", "something went wrong");
  }
});

export default stockRouter;
