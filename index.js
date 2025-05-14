import express from "express";
import { connectDB } from "./connect/connectDB.js";

const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("Hellow there !!! Server Is Running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000........");
});
