
// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";

// export default function CreateQuizCard({ index, onClickSaveHandler }) {
//   const [selectedType, setSelectedType] = useState('');
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   function checksubmit(data) {
//     console.log(data);
//   }

//   function radioHandler(event) {
//     const { value } = event.target;
//     setSelectedType(value);
//   }

//   return (
//     <div className='m-2 bg-blue-100 rounded'>
//       <form onSubmit={handleSubmit(checksubmit)}>
//         <div className="p-2">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`quizname-${index}`}
//           >
//             Question {index}
//           </label>
//           <input
//             type="text"
//             id={`quizname-${index}`}
//             placeholder="Enter Question"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             {...register(`quizname-${index}`, {
//                 required: "This field is required",
//               })}
//           />
//           {errors[`quizname-${index}`] && (
//             <p className="text-red-500 text-xs italic">
//               {errors[`quizname-${index}`]?.message}
//             </p>
//           )}
//         </div>
//         <div className="p-2">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor={`quiztype-${index}`}
//           >
//             Answer type
//           </label>
//           <span className='mx-2'>
//             <input
//               type="radio"
//               id={`quiztype-text-${index}`}
//               value="text"
//               name={`quiztype-${index}`}
//               onChange={radioHandler}
//               {...register(`quiztype-${index}`)}
//             />
//             Text
//           </span>
//           <span className='mx-2'>
//             <input
//               type="radio"
//               id={`quiztype-single-${index}`}
//               value="Single correct"
//               name={`quiztype-${index}`}
//               onChange={radioHandler}
//               {...register(`quiztype-${index}`)}
//             />
//             Single Correct
//           </span>
//           <span className='mx-2'>
//             <input
//               type="radio"
//               id={`quiztype-multiple-${index}`}
//               value="multiple Correct"
//               name={`quiztype-${index}`}
//               onChange={radioHandler}
//               {...register(`quiztype-${index}`)}
//             />
//             Multiple Correct
//           </span>

//           {selectedType === "text" ? (
//             <div>
//               <input
//                 type="text"
//                 id={`answer-${index}`}
//                 placeholder="Enter Answer"
//                 className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 {...register(`answer-${index}`)}
//               />
//             </div>
//           ) : (
//             <div>
//               <input
//                 type="text"
//                 id={`option1-${index}`}
//                 placeholder="Enter Option 1"
//                 className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 {...register(`option1-${index}`)}
//               />
//               <input
//                 type="text"
//                 id={`option2-${index}`}
//                 placeholder="Enter Option 2"
//                 className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 {...register(`option2-${index}`)}
//               />
//               <input
//                 type="text"
//                 id={`option3-${index}`}
//                 placeholder="Enter Option 3"
//                 className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 {...register(`option3-${index}`)}
//               />
//               <input
//                 type="text"
//                 id={`option4-${index}`}
//                 placeholder="Enter Option 4"
//                 className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 {...register(`option4-${index}`)}
//               />
//             </div>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Click me
//         </button>
//       </form>
//     </div>
//   );
// }











import React, { useState } from 'react';
import { useForm } from "react-hook-form";


export default function CreateQuizCard({ index, onClickSaveHandler   }) {
  const [selectedType, setSelectedType] = useState(''); 
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
    
//   } = useForm();
  

//   function checkSubmit(data){
//     console.log(data)
//   }

  function radioHandler(event) {
    const { value } = event.target;
    setSelectedType(value); 

  }

  

  return (
    <div className='m-2 bg-blue-100 rounded'>
        {/* <form onSubmit={handleSubmit(checkSubmit)} > */}


            <div className="p-2">
            <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quizname"
            >
            Question {index}
            </label>
            <input
            type="text"
            id="quizname"
            placeholder="Enter Question"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // {...register("quizname", {
            //     required: "This field is required",
            //   })}
            />
            {/* {errors.name && <FormError error={errors.name.message} />} */}
        </div>
        <div className="p-2">
            <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="quiztype"
            >
            Answer type
            </label>
            <span className='mx-2'>
            <input
                type="radio"
                id="quiztype"
                value="text"
                name={"quiz"+index}
                onChange={radioHandler}
                // {...register("quizname")}
            />
            Text
            </span>
            <span className='mx-2'>
            <input
                type="radio"
                id="quiztype"
                value="Single correct"
                name={"quiz"+index}
                onChange={radioHandler}
                // {...register("quizname")}
            />
            Single Correct
            </span>
            <span className='mx-2'>
            <input
                type="radio"
                id="quiztype"
                value="multiple Correct"
                name={"quiz"+index}
                onChange={radioHandler}
                // {...register("quizname")}
            />
            Multiple Correct
            </span>

        
            {selectedType === "text" ? (
            <div>
                <input
                type="text"
                id="quizoption1"
                placeholder="Enter Answer"
                className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // {...register("quizname")}
                />
                
            </div>
            ) :  (
            <div>
                <input
                type="text"
                id="quizoption1"
                placeholder="Enter Option 1"
                className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // {...register("quizname")}
                />
                
                <input
                type="text"
                id="quizoption2"
                placeholder="Enter Option 2"
                className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // {...register("quizname")}
                />
                <input
                type="text"
                id="quizoption3"
                placeholder="Enter Option 3"
                className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // {...register("quizname")}
                />
                <input
                type="text"
                id="quizoption4"
                placeholder="Enter Option 4"
                className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // {...register("quizname")}
                />
                
            </div>
            ) }
        </div>
        {/* <button
        type="submit"
        >Click me </button> 


         </form> */}
      
    </div>
  );
}
