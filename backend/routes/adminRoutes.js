import express from "express";
import cors from "cors";
import { deleteAdmin, showAllAdmin } from "../controllers/admin.controller.js";
import { verifyToken } from "../controllers/verifyToken.controller.js";
import { updateEmployee } from "../controllers/employee.controller.js";
import { multipleEmployeeUpload } from "../controllers/multipleEmployeeUpload.controller.js";
import { uploadCsv } from "../middleware/uploadFileMiddleware.js";
import {
  getCertificate,
  uploadCertificate,
} from "../controllers/uploadCertificate.controller.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/allAdmin", showAllAdmin);
router.post("/deleteAdmin", deleteAdmin);
router.get("/verifyToken", verifyToken);
router.post("/updateEmployee", updateEmployee);
router.post(
  "/multipleEmployeeUpload",
  uploadCsv.single("csvFile"),
  multipleEmployeeUpload
);
router.post(
  "/uploadCertificate",
  upload.single("certificate"),
  uploadCertificate
);
router.get("/getCertificate", getCertificate);
export default router;
