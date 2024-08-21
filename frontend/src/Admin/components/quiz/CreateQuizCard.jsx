

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaSave } from "react-icons/fa";
// import MultipleCorrectOption from './MultipleCorrectOption';
// import SingleCorrectOption from './SingleCorrectOption';
import InputQuizOption from './InputQuizOption';

export default function CreateQuizCard({ index }) {
  const [selectedType, setSelectedType] = useState(''); 
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  function checkSubmit(data){
    console.log('Form Data:', data);
  }

  function optionHandler(event) {
    const { value } = event.target;
    setSelectedType(value); 
  }

  return (
    <div className='m-2 bg-blue-100 rounded'>
        <form onSubmit={handleSubmit(checkSubmit)} >
            <div className="p-2">
            <div className='flex justify-between'>
                <div
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="quizname"
                >
                Question {index}
                </div>
                <div className='gap-3 mb-2 flex'>
                    <label htmlFor='anstype' className='pt-1' >Select answer type: </label>
                    <select 
                    className='ml-2 rounded border-black'
                        id='anstype'
                        {...register('anstype', { required: "Answer type is required" })}
                        onChange={optionHandler}
                    >
                        <option value="">Select</option>
                        <option value="text">Text</option>
                        <option value="singleCorrect">Single Correct</option>
                        <option value="multipleCorrect">Multiple Correct</option>
                    </select>
                    {errors.anstype && <p className="text-red-500 text-sm">{errors.anstype.message}</p>}
                    <div>
                        <button 
                            type='submit'
                            className='bg-green-600 flex w-18 gap-1 text-white rounded-full px-3 py-1' 
                        >
                            <span className='mt-1'><FaSave /></span>Save
                        </button>
                    </div>
                </div>
            </div>
            <input
            type="text"
            id="quizname"
            placeholder="Enter Question"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("question", { required: "Question is required" })}
            />
            {errors.question && <p className="text-red-500 text-sm">{errors.question.message}</p>}
        </div>
        <div className="p-2">
            {selectedType === "text" ? (
            <div>
                <input
                type="text"
                id="quizoption1"
                placeholder="Enter Answer"
                className="shadow my-1 appearance-none border rounded-full w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("answer", { required: "Answer is required" })}
                />
                {errors.answer && <p className="text-red-500 text-sm">{errors.answer.message}</p>}
            </div>
            ) : selectedType === "singleCorrect" ?(
            <div>
                <InputQuizOption ansIndex="1" rad="1"  register={register} setValue={setValue} />
                <InputQuizOption ansIndex="2" rad="1"  register={register} setValue={setValue} />
                <InputQuizOption ansIndex="3" rad="1"  register={register} setValue={setValue} />
                <InputQuizOption ansIndex="4" rad="1"  register={register} setValue={setValue} />
            </div>
            ):selectedType === "multipleCorrect"?(<div>
                <InputQuizOption ansIndex="1" rad="1" register={register} setValue="1" />
                <InputQuizOption ansIndex="2" rad="2"  register={register} setValue="1" />
                <InputQuizOption ansIndex="3" rad="3"  register={register} setValue="1" />
                <InputQuizOption ansIndex="4" rad="4"  register={register} setValue="1" />
            </div>):(<div></div>)}
        </div>
        </form> 
    </div>
  );
}
