import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})
const app = express();

// prachimishra23123
// SC2XB17tyAM4LuzP

app.listen(3000, () => {
    console.log("Server started on port 3000");
})