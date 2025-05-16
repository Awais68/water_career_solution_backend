import express from "express";
import { connectDB } from "./connect/connectDB.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";
import UserModel from "./models/userSchema.js";
import stockRouter from "./routes/stockRoute.js";
import authRouter from "./routes/authRoute.js";

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/stock", stockRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000........");
});
