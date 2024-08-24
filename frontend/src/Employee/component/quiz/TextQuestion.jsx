/* eslint-disable react/prop-types */
export default function TextQuestion({ question, index }) {
  // const handleWordChange = (event) => {
  //   const answer = event.target.value;
  //   onChange(answer); // Pass data to parent
  // };

  return (
    <div className="w-full m-2 p-2 bg-gray-200 border rounded-md">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="question"
      >
        Question {index}: {question.question}
      </label>
      <input
        type="text"
        id="question"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        // onChange={handleWordChange}
      />
    </div>
  );
}
