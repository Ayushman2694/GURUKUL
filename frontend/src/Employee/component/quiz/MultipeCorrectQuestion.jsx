/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function MultipleCorrectQuestion({
  question,
  index,
  setAnswers,
}) {
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedCheckedItems = {
      ...checkedItems,
      [name]: checked,
    };
    setCheckedItems(updatedCheckedItems);

    // Extract the selected options and update the answers array
    const selectedOptions = Object.keys(updatedCheckedItems)
      .filter((key) => updatedCheckedItems[key])
      .map((key) => key);

    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = {
        ...question,
        userAnswer: selectedOptions,
      };
      return updatedAnswers;
    });
  };

  useEffect(() => {
    // Ensure that setAnswers has an entry for this question when it first renders
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      if (!updatedAnswers[index]) {
        updatedAnswers[index] = { ...question, userAnswer: [] };
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
              type="checkbox"
              name="option1"
              checked={checkedItems.option1}
              onChange={handleCheckboxChange}
              className="form-checkbox"
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
              type="checkbox"
              name="option2"
              checked={checkedItems.option2}
              onChange={handleCheckboxChange}
              className="form-checkbox"
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
              type="checkbox"
              name="option3"
              checked={checkedItems.option3}
              onChange={handleCheckboxChange}
              className="form-checkbox"
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
              type="checkbox"
              name="option4"
              checked={checkedItems.option4}
              onChange={handleCheckboxChange}
              className="form-checkbox"
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
