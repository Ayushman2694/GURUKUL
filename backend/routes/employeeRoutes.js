import express from "express";
import { deleteEmployee, showAllEmployee, updateEmployee } from "../controllers/employee.controller.js";

const router = express.Router();


router.get("/allEmployee",showAllEmployee);
router.post("/deleteEmployee",deleteEmployee);
router.post("/updateEmployee",updateEmployee);

export default router;