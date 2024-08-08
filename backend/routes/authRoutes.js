import express from "express";
import { login, verifyToken } from "../controllers/auth.controllers.js";
import {changePassword} from "../controllers/changePassword.controller.js";
const router = express.Router();

router.post("/login", login);
router.get('/verifyToken', verifyToken);
router.post('/changePassword',changePassword);

export default router;
