import express from "express";
import { getUserInfo, login, verifyToken } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/login", login);
router.get('/verifyToken', verifyToken);
router.get('/me',getUserInfo)

export default router;
