import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  module: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Module",
    required: true,
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true,
      },
      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            required: true,
            default: false,
          },
        },
      ],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
