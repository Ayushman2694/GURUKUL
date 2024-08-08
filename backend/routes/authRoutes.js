import express from "express";
import { login, verifyToken } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/login", login);
router.get('/verifyToken', verifyToken);

export default router;
