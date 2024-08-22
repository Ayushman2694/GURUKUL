
import Module from "../models/module.model.js";
import Quiz from "../models/quiz.model.js";



// Create a new quiz
export const createQuiz = async (req, res) => {
  
    try {
      const { title, moduleId, questions,correctOptions } = req.body;
      const module = await Module.findById(moduleId);
  
      if (!module) {
        return res.status(400).json({ error: "Module not found" });
      }
  
      const quiz = new Quiz({
        title,
        module: moduleId,
        questions,
        correctOptions
      });
  
      await quiz.save();
  
      res.status(200).json({message:"Quiz created successfully"});
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
  


  export const getQuizzesByModule = async (req, res) => {
    const { moduleId } = req.params;
  
    try {
      const quizzes = await Quiz.find({ module: moduleId });
  
      if (!quizzes) {
        return res.status(400).json({ message: "No quizzes found for this module" });
      }
  
      res.status(200).json(quizzes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a single quiz by ID
  export const getQuizById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const quiz = await Quiz.findById(id);
  
      if (!quiz) {
        return res.status(400).json({ message: "Quiz not found" });
      }
  
      res.status(200).json(quiz);
    } catch (error) {
      res.status(500).json({ message: error.message });
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