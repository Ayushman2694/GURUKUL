import express from "express";
import { deleteEmployee, showAllEmployee} from "../controllers/employee.controller.js";

const router = express.Router();


router.get("/allEmployee",showAllEmployee);
router.post("/deleteEmployee",deleteEmployee);


export default router;