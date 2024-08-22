import multer from "multer";
import express from "express"
import { addVideo, allVideo, getVideosByCourseId, getVideosByModuleId } from "../controllers/course.controller.js";


const videoRouter = express.Router()

const storage = multer.diskStorage({
    destination:"videos",
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
    
})



const upload = multer({storage:storage})


videoRouter.post("/addVideo",upload.single("videoLink"),addVideo)
videoRouter.get("/allVideo",allVideo)
videoRouter.get("/getVideosBycourseId/:_id",getVideosByCourseId );






export default videoRouter;