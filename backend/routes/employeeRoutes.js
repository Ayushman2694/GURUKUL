import express from "express";
import { deleteEmployee, showAllEmployee} from "../controllers/employee.controller.js";
import { getEmployeeById } from "../controllers/getUserInfo.controller.js";

const router = express.Router();


router.get("/allEmployee",showAllEmployee);
router.post("/deleteEmployee",deleteEmployee);
router.get("/getEmployeeById/:empId",getEmployeeById)


export default router;