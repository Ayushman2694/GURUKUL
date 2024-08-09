import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://monarch:d6VqAd6xf9ON2GMi@mediversal.vp1xoai.mongodb.net/GurukulDB"
    );

    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Exit the process with failure code
  }
};

export default connectDB;
