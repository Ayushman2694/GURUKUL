import React from 'react';

export default function InputQuizOption({ ansIndex, register, setValue, rad }) {
  return (
    <div className='flex w-full gap-3'>
      <div className='w-2/3'>
        <input
          type="text"
          id={`quizoption${ansIndex}`}
          placeholder={`Enter Option ${ansIndex}`}
          className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register(`option${ansIndex}`, { required: `Option ${ansIndex} is required` })}
        />
      </div>
      <div className='pt-2 gap-2 flex items-center'>
        <label htmlFor={`correctOption${ansIndex}`}>Correct Answer:</label>
        <input
          type="checkbox"
          id={`correctOption${ansIndex}`}
          value={`option${ansIndex}`}
          name={`correctOption${rad}`}
          className='ml-2'
          onClick={() => setValue('correctAnswer', `option${ansIndex}`)}
          {...register('correctAnswer', { required: "Correct answer is required" })}
        />
      </div>
    </div>
  );
}
