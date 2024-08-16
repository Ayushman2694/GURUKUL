// import React, { useState } from 'react';
// import CreateQuizCard from '../components/quiz/CreateQuizCard';

// export default function CreateQuiz() {
//   const [saveHandlers, setSaveHandlers] = useState([]);

//   function saveHandler() {
//     saveHandlers.forEach(handler => handler());
//     console.log('All quiz questions have been saved.');
//   }

//   function registerSaveHandler(handler) {
//     setSaveHandlers(prevHandlers => [...prevHandlers, handler]);
//   }

//   return (
//     <div className="min-h-screen w-full bg-white p-4">
//       <div className="flex items-center justify-between w-full text-3xl font-bold mb-3 pr-20">
//         <h1 className="text-3xl font-bold mb-3">Create Quiz</h1>
//       </div>

//       <div className='bg-gray-100 w-full shadow-md p-4'>
//         <div className="p-2">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="quizname"
//           >
//             Quiz Title
//           </label>
//           <input
//             type="text"
//             id="quizname"
//             placeholder="Enter Quiz Title"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>

//         <div className=''>
//           <CreateQuizCard index="1" onSave={registerSaveHandler} />
//           <CreateQuizCard index="2" onSave={registerSaveHandler} />
//           <CreateQuizCard index="3" onSave={registerSaveHandler} />
//           <CreateQuizCard index="4" onSave={registerSaveHandler} />
//         </div>
//         <div className="flex items-center justify-center pb-16 m-2">
//           <button
//             type="submit"
//             onClick={saveHandler}
//             className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react'
import CreateQuizCard from '../components/quiz/CreateQuizCard'

export default function CreateQuiz() {

  function saveHandler(){
    console.log("Clicked in parents")
  }
  return (
    <div className="min-h-screen w-full bg-white p-4 ">
      <div className="flex items-center justify-between w-full text-3xl font-bold mb-3 pr-20">
        <h1 className="text-3xl font-bold mb-3">Create Quiz</h1>
      </div>

      <form>
        
      </form>

      <div className='bg-gray-100 w-full shadow-md p-4 '>
        <div className="p-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="quizname"
              >
                Quiz Title
              </label>
              <input
                type="text"
                id="quizname"
                placeholder="Enter Quiz Title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // {...register("name", {
                //   required: "This field is required",
                // })}
              />
              
        </div >

        <div className=''>
          <CreateQuizCard
             index="1"
              onClickSaveHandler= {saveHandler}
           /> 
          <CreateQuizCard
             index="2"
              onClickSaveHandler= {saveHandler}
           />
          <CreateQuizCard
             index="3"
              onClickSaveHandler= {saveHandler}
           />
          <CreateQuizCard
             index="4"
              onClickSaveHandler= {saveHandler}
           />
          <CreateQuizCard
             index="5"
              onClickSaveHandler= {saveHandler}
           />
          <CreateQuizCard
             index="6"
              onClickSaveHandler= {saveHandler}
           />
         

        </div>
        <div className="flex items-center justify-center pb-16 m-2 ">
              <button
                
                onClick={saveHandler}
                className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
                
              </button>
        </div>

        
        
      </div>
    </div>
  )
}