import express from "express";
import { videoTracker} from "../controllers/track.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/watchedBy",authenticateToken,videoTracker)



export default router;

