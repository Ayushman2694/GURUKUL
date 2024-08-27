/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function SingleCorrectQuestion({ question, index, setAnswers }) {
  const [selectedOption, setSelectedOption] = useState("");

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
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Question {index + 1}: {question.question}
      </label>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2">
          Option 1:
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-0">{question.option1}</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2">
          Option 2:
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-0">{question.option2}</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2">
          Option 3:
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-0">{question.option3}</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center gap-2">
          Option 4:
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-0">{question.option4}</span>
        </label>
      </div>
    </div>
  );
}
