import cors from "cors";
import dotenv from "dotenv";
import express, { application } from "express";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import videoRouter from "./routes/videoRoutes.js";

const app = express();
const port = 6300;
dotenv.config();

// DB connection
connectDB();

app.use(express.json());
app.use(cors());

// Serve static files from the uploads directory
app.use("/thumbnail", express.static('uploads'));
app.use("/video",express.static("videos"))

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRouter);
app.use("/api/video",videoRouter)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
