import express from "express";
import {
  deleteEmployee,
  showAllEmployee,
} from "../controllers/employee.controller.js";
import { getEmployeeById } from "../controllers/getUserInfo.controller.js";
import { multipleEmployeeUpload } from "../controllers/multipleEmployeeUpload.controller.js";
import { uploadCsv } from "../middleware/uploadFileMiddleware.js";

const router = express.Router();

router.get("/allEmployee", showAllEmployee);
router.post("/deleteEmployee", deleteEmployee);
router.get("/getEmployeeById/:empId", getEmployeeById);
router.post(
  "/multipleEmployeeUpload",
  uploadCsv.single("csvFile"),
  multipleEmployeeUpload
);

export default router;
