// import React, { useState } from 'react';

// export default function QuizSingle() {
//   const [checkedItems, setCheckedItems] = useState({
//     option1: false,
//     option2: false,
//     option3: false,
//   });

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckedItems({
//       ...checkedItems,
//       [name]: checked,
//     });
//     // Perform any other actions needed when a checkbox is selected
//   };

//   return (
//     <div className="w-full m-2 border bg-gray-200 rounded-md">
//       <label className="block text-gray-700 text-sm font-bold mb-2">
//         Question 2: Select all that apply
//       </label>

//       <div className="mb-2">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="option1"
//             checked={checkedItems.option1}
//             onChange={handleCheckboxChange}
//             className="form-checkbox"
//           />
//           <span className="ml-2">Option 1</span>
//         </label>
//       </div>

//       <div className="mb-2">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="option2"
//             checked={checkedItems.option2}
//             onChange={handleCheckboxChange}
//             className="form-checkbox"
//           />
//           <span className="ml-2">Option 2</span>
//         </label>
//       </div>

//       <div className="mb-2">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="option3"
//             checked={checkedItems.option3}
//             onChange={handleCheckboxChange}
//             className="form-checkbox"
//           />
//           <span className="ml-2">Option 3</span>
//         </label>
//       </div>
//     </div>
//   );
// }






import React, { useState } from 'react';

export default function QuizCheck({ questionId, onChange }) {
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedCheckedItems = {
      ...checkedItems,
      [name]: checked,
    };
    setCheckedItems(updatedCheckedItems);
    onChange(questionId, updatedCheckedItems); // Pass data to parent
  };

  return (
    <div className="w-full m-2 p-2 border bg-gray-200 rounded-md">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Question {questionId}: Select all that apply
      </label>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option1"
            checked={checkedItems.option1}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">Option 1</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option2"
            checked={checkedItems.option2}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">Option 2</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="option3"
            checked={checkedItems.option3}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span className="ml-2">Option 3</span>
        </label>
      </div>
    </div>
  );
}
