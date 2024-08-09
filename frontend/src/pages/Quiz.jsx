// import QuizSingle from "../component/quiz/QuizSingle";
// import QuizWord from "../component/quiz/QuizWord";
// import QuizCheck from "../component/quiz/QuizCheckbox";


// export default function Quiz(){

//     return (
//         <div className="p-8 w-full bg-gray-100 min-h-screen">
//           <h1 className="text-4xl font-bold mb-4">Data Science Quiz</h1>
//           <p className="text-lg mb-8">Test your knowledge in data science with this comprehensive quiz. Answer the questions and submit to see your score.</p>

//              <QuizSingle/>
//              <QuizSingle/>
//              <QuizCheck/>
//              <QuizCheck/>
//              <QuizWord/>
//              <QuizWord/>


//           <button
//             className="w-100 bg-blue-600 text-white rounded-md p-3 font-bold mt-4"
//           >
//             Submit Answers
//           </button>
          
          
//         </div>
//       );
//     }








import React, { useState } from 'react';
import QuizSingle from "../component/quiz/QuizSingle";
import QuizWord from "../component/quiz/QuizWord";
import QuizCheck from "../component/quiz/QuizCheckbox";

export default function Quiz() {
  const [singleAnswers, setSingleAnswers] = useState({});
  const [checkboxAnswers, setCheckboxAnswers] = useState({});
  const [wordAnswer, setWordAnswer] = useState('');

  const handleSingleChange = (questionId, answer) => {
    setSingleAnswers(prevState => ({
      ...prevState,
      [questionId]: answer
    }));
  };

  const handleCheckboxChange = (questionId, checkedItems) => {
    setCheckboxAnswers(prevState => ({
      ...prevState,
      [questionId]: checkedItems
    }));
  };

  const handleWordChange = (answer) => {
    setWordAnswer(answer);
  };

  const handleSubmit = () => {
    const quizData = {
      singleAnswers,
      checkboxAnswers,
      wordAnswer,
    };
    console.log('Quiz Data:', quizData);
    // Perform any other actions with the collected data
  };

  return (
    <div className="p-8 w-full bg-gray-100  h-fit">
      <h1 className="text-4xl font-bold mb-4">Data Science Quiz</h1>
      <p className="text-lg mb-8">Test your knowledge in data science with this comprehensive quiz. Answer the questions and submit to see your score.</p>

      <QuizSingle questionId="1" onChange={handleSingleChange} />
      
      <QuizCheck questionId="2" onChange={handleCheckboxChange} />
      
      
      
      <QuizWord questionId="3" onChange={handleWordChange} />

      <button
        className="w-100 bg-blue-600 text-white rounded-md p-3 font-bold mt-4 mb-10"
        onClick={handleSubmit}
      >
        Submit Answers
      </button>
    </div>
  );
}
