import mongoose from "mongoose";

const quizSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
    },
    questions: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
    },
  },
  { timestamps: true } // Corrected to timestamps instead of timestamp
);

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
