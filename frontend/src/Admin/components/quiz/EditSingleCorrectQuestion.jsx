import React from "react";

export default function EditSingleCorrectQuestion({
  question,
  index,
  register,
}) {

  console.log(question)
  // return (
  //   <div className="mb-6 p-4 border rounded bg-blue-100 shadow">
  //     <div className="mb-4">
  //       <label
  //         className="block text-lg font-semibold mb-2"
  //         htmlFor={`question${index}`}
  //       >
  //         Question {index}
  //       </label>
  //       <input
  //         type="text"
  //         id={`question${index}`}
  //         className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //         defaultValue={question.question}
  //         {...register(`questions[${index}].question`)}
  //       />
  //     </div>

  //     <div className="w-full">
  //       {["option1", "option2", "option3", "option4"].map((option, i) => (
  //         <div key={i} className="flex items-center mb-2">
  //           <input
  //             type="text"
  //             id={`option${index}-${i}`}
  //             className="shadow my-1 appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //             defaultValue={question[option]}
  //             {...register(`questions[${index}].${option}`)}
  //           />
  //           <div className="pt-0 gap-2 flex items-center ml-4">
  //             <input
  //               type="radio"
  //               name={`questions[${index}].correctAnswer`}
  //               value={option}
  //               id={`correctOption${index}-${i}`}
  //               className="ml-2"
  //               {...register(`questions[${index}].correctAnswer`)}
  //               defaultChecked={question.correctAnswer === option}
  //             />
  //             <label htmlFor={`correctOption${index}-${i}`}>
  //               Correct Answer
  //             </label>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}
