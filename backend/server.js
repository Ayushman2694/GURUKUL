import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js"
import courseRouter from "./routes/courseRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js"
const app = express();
const port = 6300;
dotenv.config();

//db connection
connectDB();

app.use(express.json());
app.use(cors());
app.use("/thumbnail",express.static('uploads'))

app.use("/api/auth", authRoutes);
app.use("/api/course",courseRouter);
app.use("/api/admin",adminRoutes);
app.use("/api/employee",employeeRoutes);
app.use("/api/department",departmentRoutes)

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
