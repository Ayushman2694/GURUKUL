import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://monarchsaha:monarch@mediversal.vp1xoai.mongodb.net/?');
        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
        process.exit(1); // Exit the process with failure code
    }
};

export default connectDB;
