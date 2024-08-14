/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddModule from "../ui/AddModule";
import AddCourse from "../ui/AddCourse";

export default function AddFullCourse() {
  const [courseUploaded, setCourseUploaded] = useState(true);
  const [noOfModule, setNoOfModule] = useState(1);

  return (
    <>
      {courseUploaded ? (
        <AddCourse setCourseUploaded={setCourseUploaded} />
      ) : (
        <div className="w-full  m-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-center">Adding Moudule</h2>
            <button
              className="bg-blue-600 text-md font-semibold text-white py-1 px-2 rounded-md cursor-pointer"
              onClick={() => setNoOfModule((valve) => valve + 1)}
            >
              Add Module
            </button>
          </div>

          {Array.from({ length: noOfModule }, (_, index) => (
            <div key={index} className="mt-4">
              <AddModule />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
