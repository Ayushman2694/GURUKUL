import mongoose from "mongoose";



const quizResponseSchema = mongoose.Schema({

empId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Employee",
    required:true
},
quizId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Quiz",
    required:true
},
answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz.questions",
        required: true,
      },
      selectedOptions: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],

  result:{
    type:String,
    enum:["notChecked", "passed", "failed"],
    default:"notChecked",
  }

})

const QuizResponse = mongoose.Schema(" QuizResponse",quizResponseSchema);

export default QuizResponse