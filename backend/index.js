import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
configDotenv();

// Middleware
app.use(express.json());

console.log("Ok it works");

mongoose.connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to the Database");
    app.listen(6700, () => {
      console.log("Server is running on port 6700");
    })
  })
  .catch(() => {
    console.log("Connection Failed!");

  })