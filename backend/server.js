import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/db.js';
import authRoutes from "./routes/authRoutes.js"
const app = express();
const port = 6300;
dotenv.config()


//db connection
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/auth/verifyToken',authRoutes)


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
