/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate, useParams } from "react-router-dom";
import { useQuizId } from "../../Admin/components/quiz/useQuizById";
import { FaEye } from "react-icons/fa";
// import TextQuestion from "../../Employee/component/quiz/TextQuestion";
// import SingleCorrectQuestion from "../../Employee/component/quiz/SingleCorrectQuestion";
// import MultipeCorrectQuestion from "../../Employee/component/quiz/MultipeCorrectQuestion";
import Spinner from "../../Common/Ui/Spinner";
import BackButton from "../../Common/Ui/BackButton";
import { useState } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import SelectModule from "../../Employee/component/quiz/SelectModule";
import ShowAllQuizResponse from "../../Employee/component/quiz/ShowAllQuizResponse";
import { FaEyeSlash } from "react-icons/fa";
import ShowTextAnswer from "../components/quiz/ShowTextAnswer";
import ShowSingleCorrectOption from "../components/quiz/ShowSingleCorrectOption";
import ShowMultipleCorrectOption from "../components/quiz/ShowMultipleCorrectOption";

export default function ViewQuiz() {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const [answers, setAnswers] = useState([]);
  const { isloading, quiz } = useQuizId(quizId);
  const [selectModule, setSelectModule] = useState(false);
  const [viewResponse, setViewResponse] = useState(false);

  if (isloading) return <Spinner />;

  return (
    <>
      <BackButton />
      <div className="min-h-screen w-full  bg-white p-4 ">
        <h1 className="text-3xl font-bold mb-3">{quiz?.title}</h1>

        <div className="flex pb-2">
          <button
            className="ml-2  mt-4 py-2 w-full bg-yellow-500 text-white rounded font-bold"
            onClick={() => setSelectModule(true)}
          >
            <div className="flex items-center justify-center">
              <AiOutlineSelect />
              <span className="px-2">Select Module</span>
            </div>
          </button>
          <button
            className="ml-2  mt-4 py-2 w-full bg-green-600 text-white rounded font-bold"
            onClick={() => setViewResponse((valve) => !valve)}
          >
            <div className="flex items-center justify-center">
              {viewResponse ? <FaEye /> : <FaEyeSlash />}
              <span className="px-2">
                {viewResponse ? "Hide Response" : "View Response"}
              </span>
            </div>
          </button>
          <button
            className="ml-2  mt-4 py-2 w-full bg-blue-500 text-white rounded font-bold"
            onClick={() => {
              navigate(`/admin/quizzes/editQuiz/${quiz._id}`);
            }}
          >
            <div className="flex items-center justify-center">
              <TiPencil />
              <span className="px-2">Edit Quiz</span>
            </div>
          </button>
        </div>

        {quiz?.questions.map((question, index) => {
          if (question.questionType === "text") {
            return (
              <ShowTextAnswer
                key={index}
                index={index}
                question={question}
                setAnswers={setAnswers}
              />
            );
          } else if (question.questionType === "singleCorrect") {
            return (
              <ShowSingleCorrectOption
                key={index}
                index={index}
                question={question}
                setAnswers={setAnswers}
              />
            );
          } else {
            return (
              <ShowMultipleCorrectOption
                key={index}
                index={index}
                question={question}
                setAnswers={setAnswers}
              />
            );
          }
        })}
        <div className="mb-10 h-14"></div>
      </div>
    </>
  );
}
