import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getAllQuiz,
  getAllResponse,
  getQuizById,
  getQuizByModuleId,
  getResponseByResponseId,
  quizResponse,
  updateQuiz,
  quizAttempt,
} from "../controllers/quiz.controller.js";
import { quizByCourseId } from "../controllers/quiz.controller.js";

const router = express.Router();

router.post("/createQuiz", createQuiz);
router.put("/updateQuiz", updateQuiz);
router.delete("deleteQuiz/:id", deleteQuiz);
router.get("/getQuizByModuleId/:moduleId", getQuizByModuleId);
router.get("/getAllQuiz", getAllQuiz);
router.get("/getQuizById/:id", getQuizById);
router.get("/getAllResponse", getAllResponse);
router.get("/getResponseByResponseId/:id", getResponseByResponseId);
router.get("/getAllResponse/:quizId", getAllResponse);
router.post("/quizResponse", quizResponse);
router.get("/quizByCourseId/:courseId", quizByCourseId);
router.post("/quizAttempt", quizAttempt);

export default router;
