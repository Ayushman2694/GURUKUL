import express from "express";
import { updateCourseStatus, videoTracker} from "../controllers/track.controller.js";



const router = express.Router();

router.post("/watchedBy",videoTracker)
router.post("/courseStatus",updateCourseStatus)



export default router;

