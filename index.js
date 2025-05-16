import express from "express";
import { connectDB } from "./connect/connectDB.js";
import userRouter from "./routes/userRoute.js";

const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("Hellow there !!! Server Is Running");
});

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000........");
});
