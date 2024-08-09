import express from "express";
import {
  getUserInfo,
  login,
  verifyToken,
} from "../controllers/auth.controllers.js";

import { changePassword } from "../controllers/changePassword.controller.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/login", login);
router.get("/verifyToken", verifyToken);
router.post("/getUserInfo", authenticateToken, getUserInfo);
router.post("/changePassword", changePassword);

export default router;
