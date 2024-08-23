import express from "express"
import { addVideo, allVideo, getVideosByCourseId} from "../controllers/course.controller.js";
import upload from "../middleware/uploadFileMiddleware.js";


const videoRouter = express.Router()
videoRouter.post("/addVideo",upload.single("videoLink"),addVideo)
videoRouter.get("/allVideo",allVideo)
videoRouter.get("/getVideosBycourseId/:_id",getVideosByCourseId );


export default videoRouter;