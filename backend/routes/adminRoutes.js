import express from "express";
import { deleteAdmin, showAllAdmin } from "../controllers/admin.controller.js";

const router = express.Router();


router.get("/allAdmin",showAllAdmin)
router.post("/deleteAdmin",deleteAdmin);

export default router;