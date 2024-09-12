/* eslint-disable react/prop-types */
// src/Employee/component/dashboard/DashboardCard.jsx

import { useNavigate } from "react-router-dom";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useEmployeeInfo } from "../employee_info/useEmployeeInfo";

export default function DashboardCard({
  title,
  icon,
  courses,
  Certificate = false,
  delay = 0, // Accept a delay prop with a default value of 0
}) {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployeeInfo, employe_info } =
    useEmployeeInfo(token);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (loadingEmployeeInfo) return null;

  // Apply delay to the transition style
  const flashUpStyle = {
    opacity: isRendered ? 1 : 0.9,
    transform: isRendered
      ? "translateY(0) scale(1)"
      : "translateY(-500px) scale(1)",
    transition: `transform .5s ${delay}s`, // Apply the delay here
  };

  return (
    <div className="py-2 bg-slate-100 border shadow" style={flashUpStyle}>
      <div className="flex">
        <div className="bg-slate-100">
          <h3 className="text-xl font-bold flex pt-1 px-4 rounded-r-lg rounded-tl-lg items-center text-white bg-blue-600">
            {title} <span className="px-2">{icon}</span>
          </h3>
          <div className="bg-blue-600">
            <h3 className="text-sm font-bold flex text-slate-100 bg-slate-100 rounded-tl-lg relative overflow-hidden">
              <span className="absolute inset-x-0 inset-r-0 h-2"></span>.
            </h3>
          </div>
        </div>
      </div>

      <ul className="max-h-[16vh] mx-4 mb-2 overflow-y-auto">
        {courses?.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <img src="/empty2.gif" className="w-1/6" />
              </div>
              <p className="text-xl px-4 font-medium">No {title}</p>
            </div>
          </div>
        ) : (
          courses?.map((course, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(
                  `${
                    Certificate
                      ? `/certificate/${employe_info.employeeName}/${course.courseTitle}/${employe_info.department}`
                      : `/employee/course/${course?._id}`
                  }`
                );
              }}
              className="p-1 flex items-center hover:underline text-lg cursor-pointer font-bold"
            >
              <span className="pr-2">
                <IoChevronForwardCircleOutline />
              </span>

              {course?.courseTitle}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
