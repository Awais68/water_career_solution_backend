import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = () => {
  const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  console.log("process.env==>>>", DB_USER, DB_PASSWORD);

  const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterawais.cnuqrfr.mongodb.net/${DB_NAME}`;
  try {
    mongoose.connect(url);
    console.log("Connected Successfully...");
  } catch (error) {
    console.log(error);
  }
};




