import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
const app = express();
const port = 6300;
dotenv.config();

//db connection
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/thumbnail",express.static('uploads'))
app.use("/api/course",courseRouter)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
