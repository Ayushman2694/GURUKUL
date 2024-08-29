import express from "express";
import {
  deleteAdmin,
  showAllAdmin,
  verifyTokenAdmin,
} from "../controllers/admin.controller.js";
import { verifyToken } from "../controllers/verifyToken.controller.js";
import { updateEmployee } from "../controllers/employee.controller.js";
import { multipleEmployeeUpload } from "../controllers/multipleEmployeeUpload.controller.js";
import { uploadCsv } from "../middleware/uploadFileMiddleware.js";

const router = express.Router();

router.get("/allAdmin", showAllAdmin);
router.post("/deleteAdmin", deleteAdmin);
router.get("/verifyToken", verifyToken);
router.post("/updateEmployee", updateEmployee);
router.post(
  "/multipleEmployeeUpload",
  uploadCsv.single("csvFile"),
  multipleEmployeeUpload
);
export default router;
