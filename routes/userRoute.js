import express from "express";
import UserModel from "../models/userSchema.js";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email) {
      console.log("Invalid User");
    }

    const newUser = new UserModel({
      name,
      email,
      password,
    });
    const user = await newUser.save();
    if (user) {
      console.log("User Create Successfully!!!");
    } else {
      console.log("Not Created Sorry!");
    }
  } catch (error) {
    console.log("error", error, "msg ", "something went wrong");
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email == email) {
      console.log("Invalid User");
    }

    const newUser = new UserModel({
      name,
      email,
      password,
    });
    const user = await newUser.save();
    if (user) {
      console.log("User Create Successfully!!!");
    } else {
      console.log("Not Created Sorry!");
    }
  } catch (error) {
    console.log("error", error, "msg ", "something went wrong");
  }
});

export default userRouter;
