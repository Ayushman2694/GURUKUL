/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AddModule from "../ui/AddModule";
import AddCourse from "../ui/AddCourse";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export default function AddFullCourse() {
  const [courseUploaded, setCourseUploaded] = useState(true);
  const [noOfModule, setNoOfModule] = useState(1);
  const [moduleNoList, setModuleNoList] = useState([0]);
  const [courseData, setCourseData] = useState(null);

  function addModule() {
    setNoOfModule((prevValue) => prevValue + 1);
    setModuleNoList((prevVideoNoList) => [...prevVideoNoList, noOfModule]);
  }

  function removeModule() {
    if (noOfModule === 1) return null;
    setNoOfModule((prevValue) => prevValue - 1);
    setModuleNoList((list) => [...list.slice(0, -1)]);
  }

  return (
    <div className="w-full h-full p-4">
      {courseUploaded ? (
        <AddCourse
          setCourseUploaded={setCourseUploaded}
          setCourseData={setCourseData}
        />
      ) : (
        <div className="w-full h-full">
          <h2 className="text-2xl font-bold pb-2">Your Course</h2>
          <table className="min-w-full leading-normal mb-4">
            <thead>
              <tr>
                <th className="px-2 py-3 w-1/12 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Thumbnail
                </th>
                <th className="px-5 py-3 w-3/12 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Course Title
                </th>
                <th className="px-5 py-3 w-3/12 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-5 py-3 w-1/12 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-5 py-3 w-4/12 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={courseData._id}>
                <td className="px-1 py-1 w-1/12 border-b border-gray-200 bg-white  text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    <img src={courseData.thumbnail} />
                  </p>
                </td>
                <td className="px-5 py-3 w-3/12 border-b border-gray-200 bg-white text-lg font-semibold text-center">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {courseData.courseTitle}
                  </p>
                </td>
                <td className="px-5 py-3 w-3/12 border-b border-gray-200 bg-white text-lg font-semibold text-center">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {courseData.courseDepartment}
                  </p>
                </td>
                <td className="px-5 py-3 w-1/12 border-b border-gray-200 bg-white text-lg font-semibold text-center">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {noOfModule}
                  </p>
                </td>
                <td className="px-5 py-3 w-4/12 border-b border-gray-200 bg-white text-lg font-semibold text-center">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {courseData.courseDescription}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border shadow bg-gray-50 rounded p-2 pt-4">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-center">Adding Moudule</h2>
              <div className="flex">
                <div>
                  <button
                    className="bg-red-600 text-md font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                    onClick={() => removeModule()}
                  >
                    <IoIosRemoveCircleOutline />
                    Remove Module
                  </button>
                </div>
                <div>
                  <button
                    className="bg-blue-600 text-md font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                    onClick={() => addModule()}
                  >
                    <IoIosAddCircleOutline />
                    Add Module
                  </button>
                </div>
              </div>
            </div>
            {moduleNoList.map((moduleNo) => (
              <div key={moduleNo} className="mt-4">
                <AddModule noOfModule={moduleNo + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
