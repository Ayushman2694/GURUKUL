/* eslint-disable react/prop-types */
// src/ui/DashboardCard.jsx
import { IoIosArrowForward } from "react-icons/io";

export default function DashboardCard({ title, icon, courses }) {
  return (
    <div className=" py-2 bg-slate-100 border  shadow ">
      <div className="flex">
        <div className="shadow-black shadow rounded-r-full">
          <h3 className="text-xl font-bold flex py-1 px-4  rounded-r-full items-center text-white bg-blue-600">
            {title} <span className="px-2">{icon}</span>
          </h3>
        </div>
      </div>

      <ul className="max-h-[14vh] m-4 overflow-y-auto">
        {courses.map((course, index) => (
          <li key={index} className=" p-1 flex items-center">
            <IoIosArrowForward />
            {course?.courseTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}
