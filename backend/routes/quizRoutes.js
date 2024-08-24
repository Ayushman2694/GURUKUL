import express from 'express'
import { createQuiz, deleteQuiz, getAllQuiz, getQuizByModuleId, updateQuiz } from '../controllers/quiz.controller.js';



const router = express.Router();


router.post("/createQuiz", createQuiz);
router.put("updateQuiz/:id", updateQuiz)
router.delete("deleteQuiz/:id", deleteQuiz)
router.get("/getQuizByModuleId/:moduleId", getQuizByModuleId)
router.get("/getAllQuiz",getAllQuiz)



export default router