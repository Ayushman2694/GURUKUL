// import { useState } from "react";
import { useParams } from "react-router-dom";

import { useRespnseById } from "./useResponceById";
import Spinner from "../../../Common/Ui/Spinner";
import EmployeeName from "../../../Employee/Ui/EmployeeName";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

export default function ShowAnswers() {
  const { responseId } = useParams();
  const { isLoading, response } = useRespnseById(responseId);

  if (isLoading) return <Spinner />;

  const getBackgroundColor = (correct, user) => {
    if (JSON.stringify(correct) === JSON.stringify(user)) {
      return "bg-green-200";
    } else {
      return "bg-red-200";
    }
  };

  return (
    <div className="p-8 w-full bg-gray-100 h-fit">
      <div className="flex items-center w-full justify-between text-2xl font-bold mb-6 pr-20">
        <span className="flex ">
          Response From
          <span className="px-1">
            <EmployeeName empId={response.empId} />
          </span>
        </span>
        <div className="flex">
          <button className="flex items-center   bg-green-600 text-white px-4 py-2 rounded-full">
            <span className="text-lg">
              <FaRegCheckCircle />
            </span>
            <span className="font-semibold text-sm px-1">Pass</span>
          </button>
          <button className="flex items-center mx-2  bg-red-600 text-white px-4 py-2 rounded-full">
            <span className="text-lg ">
              <FaRegTimesCircle />
            </span>
            <span className="font-semibold text-sm px-1">Fail</span>
          </button>
        </div>
      </div>
      {response?.answers.map((question, index) => {
        const getOptionText = (optionKey) => {
          return question[optionKey];
        };

        const backgroundColor = getBackgroundColor(
          question.correctAnswer,
          question.userAnswer
        );

        if (question.questionType === "text") {
          return (
            <div
              key={index}
              className={`w-full m-2 p-2 bg-slate-200 border rounded-md`}
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`question-${index}`}
              >
                Question {index + 1}: {question.question}
              </label>
              <div className="flex">
                <p>Correct Answer:</p>{" "}
                <p className="px-2">{question.correctAnswer}</p>
              </div>
              <div className="flex py-1">
                <p>User Answer:</p>
                <p className="px-2">{question.userAnswer}</p>
              </div>
            </div>
          );
        } else if (question.questionType === "singleCorrect") {
          return (
            <div
              key={index}
              className={`w-full m-2 p-2 ${backgroundColor} border rounded-md`}
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`question-${index}`}
              >
                Question {index + 1}: {question.question}
              </label>
              <div className="">
                {["option1", "option2", "option3", "option4"].map(
                  (optionKey, idx) => (
                    <div className="flex" key={idx}>
                      <p className="font-bold">{idx + 1}.</p>
                      <p className="px-2">{getOptionText(optionKey)}</p>
                    </div>
                  )
                )}
              </div>
              <div className="flex py-1">
                <p>Correct Answer:</p>{" "}
                <p className="px-2">{getOptionText(question.correctAnswer)}</p>
              </div>
              <div className="flex py-1">
                <p>User Answer:</p>{" "}
                <p className="px-2">{getOptionText(question.userAnswer)}</p>
              </div>
            </div>
          );
        } else if (question.questionType === "multipleCorrect") {
          return (
            <div
              key={index}
              className={`w-full m-2 p-2 ${backgroundColor} border rounded-md`}
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`question-${index}`}
              >
                Question {index + 1}: {question.question}
              </label>
              <div className="">
                {["option1", "option2", "option3", "option4"].map(
                  (optionKey, idx) => (
                    <div className="flex" key={idx}>
                      <p className="font-bold">{idx + 1}.</p>
                      <p className="px-2">{getOptionText(optionKey)}</p>
                    </div>
                  )
                )}
              </div>
              <div className="flex py-1">
                <p>Correct Answers:</p>
                <p className="px-2">
                  {question.correctAnswer
                    .map((ans) => getOptionText(ans))
                    .join(", ")}
                </p>
              </div>
              <div className="flex py-1">
                <p>User Answers:</p>
                <p className="px-2">
                  {question.userAnswer
                    .map((ans) => getOptionText(ans))
                    .join(", ")}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
