import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizId } from "../../Admin/components/quiz/useQuizById";
import Spinner from "../../Common/Ui/Spinner";
import TextQuestion from "../component/quiz/TextQuestion";
import SingleCorrectQuestion from "../component/quiz/SingleCorrectQuestion";
import MultipeCorrectQuestion from "../component/quiz/MultipeCorrectQuestion";
import { useUploadQuizResponse } from "../../Admin/components/quiz/useuploadQuizResponse";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";

export default function Quiz() {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const { isloading, quiz } = useQuizId(quizId);
  const [answers, setAnswers] = useState([]);
  const { uploadQuizResponse, isLoading } = useUploadQuizResponse();
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployeeInfo, employe_info } =
    useEmployeeInfo(token);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const cleanedAnswers = answers.filter((answer) => answer !== undefined);
    uploadQuizResponse(
      {
        empId: employe_info.empId,
        quizId: quizId,
        answers: cleanedAnswers,
      },
      {
        onSuccess: () => {
          navigate(-1);
        },
      }
    );
  };

  if (isloading || loadingEmployeeInfo) return <Spinner />;
  return (
    <div className="p-8 w-full bg-gray-100 h-fit">
      <h1 className="text-2xl font-bold mb-4">{quiz?.title}</h1>

      {quiz?.questions.map((question, index) => {
        if (question.questionType === "text") {
          return (
            <TextQuestion
              key={index}
              index={index}
              question={question}
              onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              setAnswers={setAnswers}
            />
          );
        } else if (question.questionType === "singleCorrect") {
          return (
            <SingleCorrectQuestion
              key={index}
              index={index}
              question={question}
              onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              setAnswers={setAnswers}
            />
          );
        } else {
          return (
            <MultipeCorrectQuestion
              key={index}
              index={index}
              question={question}
              onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              setAnswers={setAnswers}
            />
          );
        }
      })}

      <button
        className="ml-2  mt-2 mb-8 py-2 w-full bg-blue-500 text-white rounded"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : " Submit"}
      </button>
    </div>
  );
}
