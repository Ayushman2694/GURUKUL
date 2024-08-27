import Module from "../models/module.model.js";
import Quiz from "../models/quiz.model.js";
import QuizResponse from "../models/quizResponse.model.js";

export const createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;

    const quiz = new Quiz({
      title:title,
      questions:questions,
      attemptedBy: [],
    });
    console.log(quiz)
    await quiz.save();

    return res.status(200).json({ message: "Quiz created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const updateQuiz = async (req, res) => {
  const { quizId, title, questions, moduleId } = req.body;

  try {
    const updateDetails = {
      $set: {
        title: title,
        questions: questions,
        moduleId: moduleId,
      },
    };

    const quiz = await Quiz.findByIdAndUpdate(quizId, updateDetails, {
      new: true,
    });

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    return res.status(200).json({ message: "Quiz updated successfully", quiz });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "error in quiz update controller" });
  }
};

export const getQuizByModuleId = async (req, res) => {
  const { moduleId } = req.params;

  try {
    const quiz = await Quiz.find({ module: moduleId });

    if (!quiz) {
      return res
        .status(200)
        .json({ message: "No quiz found for this module", quiz });
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

export const getAllResponse = async (req, res) => {
  try {
    const { quizId } = req.params;
    const allResponse = await QuizResponse.find(quizId);
    if (!allResponse) {
      return res.status(400).json({ error: "error in fetching responses" });
    }
    return res
      .status(200)
      .json({ message: "all responses fetched successfully", allResponse });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Error in getAllResponse controller" });
  }
};

export const getResponseByResponseId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Received id: ${id}`);
    const response = await QuizResponse.findById(id);
    if (!response) {
      return res.status(400).json({ error: "error in fetching response" });
    }
    return res
      .status(200)
      .json({ message: "response fetched successfully", response });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Error in getResponseByResponseId controller" });
  }
};

export const quizByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;

    const allModules = await Module.find({ course: courseId });

    if (allModules.length === 0) {
      return res.status(400).json({ error: "No modules found" });
    }

    const moduleIds = allModules.map((module) => module._id);

    const allQuizzes = await Quiz.find({ module: { $in: moduleIds } });

    return res.status(200).json({
      message: "Successfully fetched all quizzes",
      allQuizzes,
    });
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ error: "Error in quizByCourseId Controller" });
  }
};
export const quizAttempt=async(req,res)=>{
  try {
    const {empId,quizId,status}=req.body;
    const quiz = await Quiz.findById(quizId);
    if(!quiz){
      return res.status(400).json({error:"unable to fetch quiz"})
    }
    else{
    if(status==="pass"){
      quiz.attemptedBy.push(empId)
      quiz.passedBy.push(empId)
    }
    else{
      quiz.attemptedBy.push(empId)
  }
    return res.status(200).json({message:"user attempted successfully"})}
  } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ error: "Error in quizAttempt Controller" });
  }
}