import express from "express";

import {
  getallCourse,
  addCourse,
  deleteCourseWithCascade,
  addModule,
  updateCourse,
  modulesByCourseId,
  getVideoById,
  getCourseById,
  getCourseByDepartment,
} from "../controllers/course.controller.js";
import {
  assignCourse,
  excludingDepartment,
} from "../controllers/enrollCourse.controller.js";
import { uploadImage } from "../middleware/uploadFileMiddleware.js";

const courseRouter = express.Router();

courseRouter.post("/addCourse", uploadImage.single("thumbnail"), addCourse);
courseRouter.get("/allCourse", getallCourse);
courseRouter.delete("/deleteCourse/:courseId",deleteCourseWithCascade);
courseRouter.post("/addModule", addModule);
courseRouter.post(
  "/updateCourse",
  uploadImage.single("thumbnail"),
  updateCourse
);
courseRouter.get("/allModules/:courseId", modulesByCourseId);
courseRouter.get("/getVideo/:_id", getVideoById);
courseRouter.get("/getCourse/:_id", getCourseById);
courseRouter.get("/getCourseByDepartment/:empId", getCourseByDepartment);
courseRouter.post("/assign-course", assignCourse);
courseRouter.get("/course-exclude/:empId", excludingDepartment);

export default courseRouter;
