import express from "express";

import {
  getallCourse,
  addCourse,
  addModule,
  updateCourse,
  modulesByCourseId,
  getVideoById,
  getCourseById,
  getCourseByDepartment,
  deleteCourseAndReferences,
  getModulebyId,
} from "../controllers/course.controller.js";
import {
  assignCourse,
  excludingDepartment,
} from "../controllers/enrollCourse.controller.js";
import multer from "multer";


const courseRouter = express.Router();
const storage = multer.diskStorage({
  destination: "uploads", 
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

courseRouter.post("/addCourse", upload.single("thumbnail"), addCourse);
courseRouter.get("/allCourse", getallCourse);
courseRouter.delete("/deleteCourse/:courseId",deleteCourseAndReferences);
courseRouter.post("/addModule", addModule);
courseRouter.post(
  "/updateCourse",
  upload.single("thumbnail"),
  updateCourse
);
courseRouter.get("/allModules/:courseId", modulesByCourseId);
courseRouter.get("/getVideo/:_id", getVideoById);
courseRouter.get("/getCourse/:_id", getCourseById);
courseRouter.get("/getCourseByDepartment/:empId", getCourseByDepartment);
courseRouter.post("/assign-course", assignCourse);
courseRouter.get("/course-exclude/:empId", excludingDepartment);
courseRouter.get("/getModule/:id", getModulebyId);

export default courseRouter;
