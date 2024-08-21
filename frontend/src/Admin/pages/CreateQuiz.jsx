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
import { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import BackButton from '../../Common/Ui/BackButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';




export default function CreateQuiz() {
  const [quizCards, setQuizCards] = useState([1]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate()

  function checkSubmit(data){
    // data.preventDefault();
    console.log('Form Data:', data);
    // reset()

    setIsSubmitted(true)
  }
  

  function saveHandler(){
    console.log("Clicked in parents")
  }

  function addQuizCard() {
    setQuizCards((prevCards) => [...prevCards, prevCards.length + 1]);
  }

  function removeQuizCard() {
    setQuizCards((prevCards) => 
      prevCards.length > 1 ? prevCards.slice(0, -1) : prevCards
    );
  }

  function optionHandler(event) {
    const { value } = event.target;
    
    setSelectedType(value); 
    
  }

  return (
    <div className="min-h-screen w-full bg-white p-4 ">
      <div className="flex items-center justify-between w-full text-3xl font-bold mb-3 pr-20">
        <h1 className="text-3xl font-bold mb-3">Create Quiz</h1>
        <div className='flex h-10 gap-2'>
          <div>
              <button
                className="bg-red-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => removeQuizCard()}
              >
                <IoIosRemoveCircleOutline />
                Remove Question
              </button>
            </div>
            <div>
              <button
                className="bg-blue-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => addQuizCard()}
              >
                <IoIosAddCircleOutline />
                Add Question
              </button>
            </div>
            <div>
              <BackButton/>
            </div>
        </div>
      </div>

      

      <div className='bg-gray-100 w-full shadow-md px-4 py-2 '>

      <form onSubmit={handleSubmit(checkSubmit)} >
        <div className="p-2">
                
                <div className='flex justify-between'>
                  <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor='quizname'
                  >
                  Quiz Title
                  </label>
                        <button 
                            type='submit'
                            className={`flex w-18 gap-1 text-white rounded-full px-3 py-1 mb-1 mr-1 
                            ${isSubmitted ? 'bg-gray-400' : 'bg-green-600'}`}
                            disabled={isSubmitted} style={{ cursor: isSubmitted ? 'not-allowed' : 'pointer' }}
                        >
                            <span className='mt-1'><FaSave /></span>Save
                        </button>
                  </div>
                <input
                  type="text"
                  id="quizname"
                  placeholder="Enter Quiz Title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={optionHandler}
                        disabled={isSubmitted} style={{ cursor: isSubmitted ? 'not-allowed' : 'text' }}
                  {...register("name", {
                    required: "This field is required",
                  })}
                />
                
          </div >  
      </form>
        
        <div className=''>
          {quizCards.map((card, index) => (
            <CreateQuizCard
              key={index}
              index={index + 1}
              // onClickSaveHandler={saveHandler}
            />
          ))}
        </div>
        <div className="flex items-center justify-center pb-16 m-2 ">
              <button
                
                onClick={()=>{navigate('/admin/quizzes')}}
                className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
                
              </button>
        </div>

        
        
      </div>
    </div>
  )
}

// import React, { useState } from 'react';
// import CreateQuizCard from '../components/quiz/CreateQuizCard';
// import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";

// export default function CreateQuiz() {
//   const [quizCards, setQuizCards] = useState([1]);

//   function saveHandler() {
//     console.log("Clicked in parent");
//   }

//   function addQuizCard() {
//     setQuizCards((prevCards) => [...prevCards, prevCards.length + 1]);
//   }

//   function removeQuizCard() {
//     setQuizCards((prevCards) => 
//       prevCards.length > 1 ? prevCards.slice(0, -1) : prevCards
//     );
//   }

//   return (
//     <div className="min-h-screen w-full bg-white p-4 ">
//       <div className="flex items-center justify-between w-full text-3xl font-bold mb-3 pr-20">
//         <h1 className="text-3xl font-bold mb-3">Create Quiz</h1>
//         <div className='flex h-10 gap-2'>
//           <div>
//             <button
//               className="bg-red-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
//               onClick={removeQuizCard}
//             >
//               <IoIosRemoveCircleOutline />
//               Remove Quiz Card
//             </button>
//           </div>
//           <div>
//             <button
//               className="bg-blue-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
//               onClick={addQuizCard}
//             >
//               <IoIosAddCircleOutline />
//               Add Quiz Card
//             </button>
//           </div>
//         </div>
//       </div>

//       <form></form>

//       <div className='bg-gray-100 w-full shadow-md p-4 '>
//         <div className="p-2">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor='quizname'
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
//           {quizCards.map((card, index) => (
//             <CreateQuizCard
//               key={index}
//               index={index + 1}
//               onClickSaveHandler={saveHandler}
//             />
//           ))}
//         </div>

//         <div className="flex items-center justify-center pb-16 m-2 ">
//           <button
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
