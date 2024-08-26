import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRespnseById } from "./useResponceById";

export default function ShowAnswers() {
  const { responseId } = useParams();
  const { isLoading, response } = useRespnseById(responseId);

  console.log(response);

  //   if (isloading || loadingEmployeeInfo) return <Spinner />;
  //   return (
  //     <div className="p-8 w-full bg-gray-100 h-fit">
  //       {/* <h1 className="text-4xl font-bold mb-4">{quiz?.title}</h1> */}

  //       {response?.questions.map((question, index) => {
  //         if (question.questionType === "text") {
  //           return (
  //             <div
  //               key={index}
  //               className="w-full m-2 p-2 bg-gray-200 border rounded-md"
  //             >
  //               <label
  //                 className="block text-gray-700 text-sm font-bold mb-2"
  //                 htmlFor={`question-${index}`}
  //               >
  //                 Question {index}: {question.question}
  //               </label>
  //               <input
  //                 type="text"
  //                 id={`question-${index}`}
  //                 value={answer}
  //                 onChange={handleInputChange}
  //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //               />
  //             </div>
  //           );
  //         } else if (question.questionType === "singleCorrect") {
  //           return (
  //             <SingleCorrectQuestion
  //               key={index}
  //               index={index + 1}
  //               question={question}
  //               onAnswerChange={(answer) => handleAnswerChange(index, answer)}
  //               setAnswers={setAnswers}
  //             />
  //           );
  //         } else {
  //           return (
  //             <MultipeCorrectQuestion
  //               key={index}
  //               index={index + 1}
  //               question={question}
  //               onAnswerChange={(answer) => handleAnswerChange(index, answer)}
  //               setAnswers={setAnswers}
  //             />
  //           );
  //         }
  //       })}

  //       <button
  //         className="ml-2  mt-4 py-2 w-full bg-blue-500 text-white rounded"
  //         onClick={handleSubmit}
  //         disabled={isLoading}
  //       >
  //         {isLoading ? <Spinner /> : " Submit"}
  //       </button>
  //     </div>
  //   );
}
