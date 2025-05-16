import mongoose from "mongoose";
import express from "express";
import UserModel from "../models/userSchema.js";

import bcrypt from "bcrypt";

const authRouter = express.Router();
const saltRounds = 10;

authRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    // console.log("user", user);
    if (user) res.send("user Already Exist");

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed password:", hashedPassword);

    const newUser = new UserModel({
      name,
      email,
      hashedPassword,
    });
    if (newUser) {
      console.log("newUser==>", newUser);
      res.send("Well Come Programming World!!!");
      //   console.log("User Create Successfully!!!");
    } else {
      console.log("Not Created Sorry!");
    }
  } catch (error) {
    console.log("error", error, "msg ", "something went wrong");
  }
});

export default authRouter;
