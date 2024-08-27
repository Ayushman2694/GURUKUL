import express from "express";
import {
  deleteAdmin,
  showAllAdmin,
  verifyTokenAdmin,
} from "../controllers/admin.controller.js";
import { verifyToken } from "../controllers/verifyToken.controller.js";
import { updateEmployee } from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/allAdmin", showAllAdmin);
router.post("/deleteAdmin", deleteAdmin);
router.get("/verifyToken", verifyToken);
router.post("/updateEmployee", updateEmployee);

export default router;
