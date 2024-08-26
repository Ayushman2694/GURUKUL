/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import { useQuizId } from "../../Admin/components/quiz/useQuizById";

import TextQuestion from "../../Employee/component/quiz/TextQuestion";
import SingleCorrectQuestion from "../../Employee/component/quiz/SingleCorrectQuestion";
import MultipeCorrectQuestion from "../../Employee/component/quiz/MultipeCorrectQuestion";
import Spinner from "../../Common/Ui/Spinner";
import BackButton from "../../Common/Ui/BackButton";
export default function ViewQuiz() {
  const { quizId } = useParams();
  const { isloading, quiz } = useQuizId(quizId);

  if (isloading) return <Spinner />;

  return (
    <>
      <BackButton />
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
    </>
  );
}
