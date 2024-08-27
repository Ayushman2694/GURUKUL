import express from "express";
import { login, createEmploye } from "../controllers/auth.controllers.js";
import {
  adminChangePassword,
  changePassword,
} from "../controllers/changePassword.controller.js";
import {
  adminLogin,
  adminSignup,
} from "../controllers/admin.auth.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";
import { getUserInfo } from "../controllers/getUserInfo.controller.js";
import { verifyToken } from "../controllers/verifyToken.controller.js";
const router = express.Router();

router.post("/login", login);
router.get("/verifyToken", verifyToken);
router.post("/changePassword", changePassword);
router.post("/adminChangePassword", adminChangePassword);
router.post("/adminLogin", adminLogin);
router.post("/getUserInfo", authenticateToken, getUserInfo);
router.post("/employeeSignup", createEmploye);
router.post("/adminSignup", adminSignup);

export default router;
