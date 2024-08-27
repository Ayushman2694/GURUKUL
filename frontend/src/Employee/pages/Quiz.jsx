/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import { useQuizId } from "../../Admin/components/quiz/useQuizById";
import Spinner from "../../Common/Ui/Spinner";
import TextQuestion from "../component/quiz/TextQuestion";
import SingleCorrectQuestion from "../component/quiz/SingleCorrectQuestion";
import MultipeCorrectQuestion from "../component/quiz/MultipeCorrectQuestion";

export default function Quiz() {
  const { quizId } = useParams();
  const { isloading, quiz } = useQuizId(quizId);

  // const handleSubmit = () => {
  //   const quizData = {
  //     singleAnswers,
  //     checkboxAnswers,
  //     wordAnswer,
  //   };
  //   console.log("Quiz Data:", quizData);
  //   // Perform any other actions with the collected data
  // };

  if (isloading) return <Spinner />;

  console.log(quiz?.questions);

  return (
    <div className="p-8 w-full bg-gray-100  h-fit">
      <h1 className="text-4xl font-bold mb-4">{quiz?.title}</h1>

      {quiz?.questions.map((question, index) => {
        if (question.questionType === "text") {
          return (
            <TextQuestion key={index} index={index + 1} question={question} />
          );
        } else if (question.questionType === "singleCorrect") {
          return (
            <SingleCorrectQuestion
              key={index}
              index={index + 1}
              question={question}
            />
          );
        } else {
          return (
            <MultipeCorrectQuestion
              key={index}
              index={index + 1}
              question={question}
            />
          );
        }
      })}
    </div>
  );
}
