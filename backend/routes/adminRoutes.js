import express from "express";
import { deleteAdmin, showAllAdmin, verifyTokenAdmin } from "../controllers/admin.controller.js";
import { verifyToken } from "../controllers/verifyToken.controller.js";

const router = express.Router();


router.get("/allAdmin",showAllAdmin)
router.post("/deleteAdmin",deleteAdmin);
router.get("/verifyToken", verifyToken);


export default router;