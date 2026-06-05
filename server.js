import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user_route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("connected to database")})

app.use(userRoute)

app.listen(process.env.PORT,()=>{
    console.log("server is running on port 4400");
})