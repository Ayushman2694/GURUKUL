import Module from "../models/module.model.js";
import Quiz from "../models/quiz.model.js";
import QuizResponse from "../models/quizResponse.model.js";

// Create a new quiz
export const createQuiz = async (req, res) => {
  try {
    const { title, moduleId, questions } = req.body;
    const module = await Module.findById(moduleId);

    if (!module) {
      return res.status(400).json({ error: "Module not found" });
    }

    const quiz = new Quiz({
      title,
      module: moduleId,
      questions,
    });

    await quiz.save();

    res.status(200).json({ message: "Quiz created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a quiz
export const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const { title, questions } = req.body;

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(400).json({ message: "Quiz not found" });
    }

    quiz.title = title;
    quiz.questions = questions;

    await quiz.save();

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQuizByModuleId = async (req, res) => {
  const { moduleId } = req.params;

  try {
    const quiz = await Quiz.find({ module: moduleId });

    if (!quiz) {
      return res.status(400).json({ message: "No quiz found for this module" });
    }

    res.status(200).json({ message: "quiz fetched Successfully", quiz });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "error in getQuizByModule controller" });
  }
};

export const getQuizById = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(400).json({ message: "Quiz not found" });
    }

    res.status(200).json(quiz);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    await quiz.remove();

    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    if (!quizzes) {
      return res.status(400).json({ error: "error in fetching quizzes" });
    }
    return res
      .status(200)
      .json({ message: "all quizzes fetched successfully", quizzes });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "error in getAllQuiz controller" });
  }
};

export const quizResponse = async (req, res) => {
  try {
    const { empId, quizId, answers, result } = req.body;
    const response = await QuizResponse.findOne({ empId, quizId });
    if (response) {
      return res.status(400).json({ message: "Quiz already attempted" });
    }
    const newResponse = new QuizResponse({
      empId,
      quizId,
      answers,
      result,
    });
    await newResponse.save();
    return res
      .status(200)
      .json({ message: "Quiz response saved successfully", newResponse });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Error in quizResponse controller" });
  }
};
