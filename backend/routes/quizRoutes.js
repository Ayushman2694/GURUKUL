import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getAllQuiz,
  getAllResponse,
  getQuizById,
  getQuizByModuleId,
  quizResponse,
  updateQuiz,
} from "../controllers/quiz.controller.js";

const router = express.Router();

router.post("/createQuiz", createQuiz);
router.put("updateQuiz/:id", updateQuiz);
router.delete("deleteQuiz/:id", deleteQuiz);
router.get("/getQuizByModuleId/:moduleId", getQuizByModuleId);
router.get("/getAllQuiz", getAllQuiz);
router.get("/getQuizById/:id", getQuizById);
router.get("/getAllResponse", getAllResponse);
router.post("/quizResponse", quizResponse);

export default router;
