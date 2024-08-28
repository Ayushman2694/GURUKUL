/* eslint-disable react/prop-types */
import { GrView } from "react-icons/gr";
import ShowMoreShowLess from "../../../Common/Ui/ShowMoreShowLess";

export default function ShowQuizCard({ title, description, viewQuizHandler }) {
  return (
    <div
      className="bg-gray-100 shadow-md rounded-lg p-4"
      onClick={viewQuizHandler}
    >
      <h2 className=" text-xl font-bold"> {title}</h2>
      <div className="text-gray-600">
        <ShowMoreShowLess descriptionDetail={description} charNo={42} />
      </div>
      <div className="flex gap-2 mt-4 item justify-end items-center">
        <button
          onClick={viewQuizHandler}
          className="bg-green-600 flex w-18 gap-1 text-white rounded-full px-3 py-1"
        >
          <span className="mt-1">
            <GrView />
          </span>
          View
        </button>
        {/* <button
          onClick={EditQuizHandler}
          className="bg-blue-600 flex w-18 gap-1 text-white rounded-full px-3 py-1"
        >
          <span className="mt-1">
            <MdEdit />
          </span>
          Edit
        </button> */}
        {/* <button className='bg-blue-600 w-18 text-white rounded-full px-3 py-1'>Edit</button> */}
      </div>
    </div>
  );
}
