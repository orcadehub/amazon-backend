import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user_route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4400;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("Missing MONGO_URI environment variable. Set it in Render dashboard.");
    process.exit(1);
}

const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to database");
        app.use(userRoute);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

startServer();