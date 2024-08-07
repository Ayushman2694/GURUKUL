// src/components/OngoingCourseCard.jsx
import React from 'react';

export default function OngoingCourseCard({ title, progress }) {
  return (
    <div className="bg-gray-100 h-20 p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex justify-center h-10 w-10 rounded">
          <img src="./default_image.png" alt="thumbnail" />
        </div>
      <div className=' w-4/5 pr-4 pl-2' >
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap rounded text-white justify-center bg-blue-600"
            ></div>
          </div>
          <div>
            {progress} % complete
          </div>
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 w-1/5 text-white font-bold py-2 px-4 rounded">
        Continue Learning
      </button>
    </div>
  );
}
