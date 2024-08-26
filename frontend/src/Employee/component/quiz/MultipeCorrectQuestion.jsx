/* eslint-disable react/prop-types */
// import { useState } from "react";

export default function MultipeCorrectQuestion({ question, index }) {
  // const [checkedItems, setCheckedItems] = useState({
  //   option1: false,
  //   option2: false,
  //   option3: false,
  // });

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   const updatedCheckedItems = {
  //     ...checkedItems,
  //     [name]: checked,
  //   };
  //   setCheckedItems(updatedCheckedItems);
  //   onChange(questionId, updatedCheckedItems); // Pass data to parent
  // };

  return (
    <div className="w-full m-2 p-2 border bg-gray-200 rounded-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Question {index}: {question.question}
      </label>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option1"
            // checked={checkedItems.option1}
            // onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">{question.option1}</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option2"
            // checked={checkedItems.option2}
            // onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">{question.option2}</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option3"
            // checked={checkedItems.option3}
            // onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">{question.option3}</span>
        </label>
      </div>
      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option3"
            // checked={checkedItems.option3}
            // onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">{question.option4}</span>
        </label>
      </div>
    </div>
  );
}
