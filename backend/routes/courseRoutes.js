import express from 'express';
import multer from 'multer';
import  { getallCourse,addCourse, addModule } from '../controllers/course.controller.js';

const courseRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads", 
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

courseRouter.post("/addCourse", upload.single("thumbnail"), addCourse);
courseRouter.get("/allCourse",getallCourse);
courseRouter.post("/addModule", addModule);


export default courseRouter;
