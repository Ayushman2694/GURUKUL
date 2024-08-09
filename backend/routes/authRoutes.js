


import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import { login, verifyToken } from "../controllers/auth.controllers.js";
import { changePassword } from "../controllers/changePassword.controller.js";
import { adminLogin } from "../controllers/admin.auth.controller.js";
const router = express.Router();

router.post("/login", login);
router.get('/verifyToken', verifyToken);
router.post('/changePassword',changePassword);
router.post("/adminLogin",adminLogin)

export default router;
