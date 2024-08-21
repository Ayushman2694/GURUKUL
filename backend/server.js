import cors from "cors";
import dotenv from "dotenv";
import express, { application } from "express";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import courseRouter from "./routes/courseRoutes.js";
import videoRouter from "./routes/videoRoutes.js";
import trackingRoutes from "./routes/trackingRoutes.js";

import departmentRoutes from "./routes/departmentRoutes.js";

const app = express();
const port = process.env.PORT || 6300;
dotenv.config();

// DB connection
connectDB();

app.use(express.json());
app.use(cors());

// Serve static files from the uploads directory
app.use("/thumbnail", express.static("uploads"));
app.use("/video", express.static("videos"));

app.use("/api/auth", authRoutes);
app.use("/api/video",videoRouter)
app.use("/api/course",courseRouter);
app.use("/api/admin",adminRoutes);
app.use("/api/employee",employeeRoutes);
app.use("/api/department",departmentRoutes)
app.use("/api/tracking",trackingRoutes)


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
