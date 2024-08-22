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
            type: String,
            required: true,
          },
      ],
      correctOptions:[{
        type: String,
        required: true,
      }]
    },
  ],
},{timestamp:true});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
