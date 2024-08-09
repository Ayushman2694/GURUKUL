/* eslint-disable react/prop-types */
import { useState } from "react";

export default function QuizSingle({ questionId, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(questionId, selectedValue); // Pass data to parent
  };

  return (
    <div className="w-full m-2 p-2 border bg-gray-200 rounded-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Question {questionId}: What does the term overfitting refer to in
        machine learning?
      </label>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="opt1"
            checked={selectedOption === "opt1"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-2">
            A model that performs well on training data but poorly on new data
          </span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="opt2"
            checked={selectedOption === "opt2"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-2">
            A model that performs poorly on both training and new data
          </span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="opt3"
            checked={selectedOption === "opt3"}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <span className="ml-2">
            A model that performs well on new data but poorly on training data
          </span>
        </label>
      </div>
    </div>
  );
}
