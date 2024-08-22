import express from 'express';
import multer from 'multer';
import  { getallCourse,addCourse, deleteCourse ,addModule, updateCourse, modulesByCourseId, getVideoById, getCourseById, getCourseByDepartment} from '../controllers/course.controller.js';

const courseRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads", 
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

courseRouter.post("/addCourse", upload.single("thumbnail"), addCourse)
courseRouter.get("/allCourse",getallCourse);
courseRouter.post('/deleteCourse',deleteCourse);
courseRouter.post("/addModule", addModule);
courseRouter.post("/updateCourse",upload.single("thumbnail") ,updateCourse);
courseRouter.get("/allModules/:courseId",modulesByCourseId );
courseRouter.get("/getVideo/:_id",getVideoById );
courseRouter.get("/getCourse/:_id",getCourseById );
courseRouter.get("/getCourseByDepartment",getCourseByDepartment );




export default courseRouter;
