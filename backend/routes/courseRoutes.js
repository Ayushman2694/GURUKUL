import express from 'express';
import  { getallCourse,addCourse, deleteCourse ,addModule, updateCourse, modulesByCourseId, getVideoById, getCourseById, getCourseByDepartment} from '../controllers/course.controller.js';
import upload from '../middleware/uploadFileMiddleware.js';

const courseRouter = express.Router();

courseRouter.post("/addCourse", upload.single("thumbnail"), addCourse)
courseRouter.get("/allCourse",getallCourse);
courseRouter.post('/deleteCourse',deleteCourse);
courseRouter.post("/addModule", addModule);
courseRouter.post("/updateCourse",upload.single("thumbnail") ,updateCourse);
courseRouter.get("/allModules/:courseId",modulesByCourseId );
courseRouter.get("/getVideo/:_id",getVideoById );
courseRouter.get("/getCourse/:_id",getCourseById );
courseRouter.get("/getCourseByDepartment/:empId",getCourseByDepartment );




export default courseRouter;
