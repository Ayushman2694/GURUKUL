/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function SingleCorrectQuestion({ question, index, setAnswers }) {
  const [selectedOption, setSelectedOption] = useState("");

  // console.log("Questions are here ", question);

  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption(newSelectedOption);

    // Update the answers array with the new selected option as userAnswer
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      const updatedQuestion = {
        ...updatedAnswers[index],
        userAnswer: newSelectedOption,
      };
      updatedAnswers[index] = updatedQuestion;
      return updatedAnswers;
    });
  };

  useEffect(() => {
    // Ensure that setAnswers has an entry for this question when it first renders
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      if (!updatedAnswers[index]) {
        updatedAnswers[index] = { ...question, userAnswer: "" };
      }
      return updatedAnswers;
    });
  }, [index, setAnswers, question]);

  return (
    <div className="w-full m-2 p-2 border bg-gray-200 rounded-md">
      <label className="block w-full text-gray-700 text-sm font-bold mb-2">
        Question {index + 1}: {question.question}
      </label>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2 w-full ">
          <div className="w-24 flex">
            <span className="mr-1">Option 1:</span>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="form-radio "
            />
          </div>
          <span className="ml-0 w-3/4 text-sm md:text-base md:w-full">
            {question.option1}
          </span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2 w-full ">
          <div className="w-24 flex">
            <span className="mr-1">Option 2:</span>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="form-radio "
            />
          </div>
          <span className="ml-0 w-3/4 text-sm md:text-base md:w-full">
            {question.option2}
          </span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2 w-full ">
          <div className="w-24 flex">
            <span className="mr-1">Option 3:</span>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
              className="form-radio "
            />
          </div>
          <span className="ml-0 w-3/4 text-sm md:text-base md:w-full">
            {question.option3}
          </span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2 w-full ">
          <div className="w-24 flex">
            <span className="mr-1">Option 4:</span>
            <input
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
              className="form-radio "
            />
          </div>
          <span className="ml-0 w-3/4 text-sm md:text-base md:w-full">
            {question.option4}
          </span>
        </label>
      </div>
    </div>
  );
}
