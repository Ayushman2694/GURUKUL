import express from 'express'
import { createQuiz, deleteQuiz, getQuizzesByModule, updateQuiz } from '../controllers/quiz.controller.js';



const router = express.Router();


router.post("/createQuiz", createQuiz);
router.put("/:id", updateQuiz)
router.delete("/:id", deleteQuiz)
router.get("/module/:moduleId", getQuizzesByModule)



export default router