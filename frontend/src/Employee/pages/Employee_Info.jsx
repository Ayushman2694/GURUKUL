/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import Spinner from "../../Common/Ui/Spinner";
import CourseName from "../Ui/CourseName";
import { ImInfo } from "react-icons/im";
import { FaBook } from "react-icons/fa6";

import { IoChevronForwardCircleOutline } from "react-icons/io5";

export default function EmployeeInfo() {
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading, employe_info } = useEmployeeInfo(token);

  if (isLoading) return <Spinner />;
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return new Date(`${year}-${month}-${day}`);
  };

  console.log(employe_info);

  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-4">
        <div className="w-full">
          <h1 className="text-2xl md:text-4xl font-bold px-1">
            Employee Information
          </h1>
        </div>
        <div className="md:flex w-full pt-4 ">
          <div className="w-full md:w-1/2 border m-1 rounded-sm bg-slate-50 drop-shadow-xl py-2">
            <div className="flex">
              <div className=" bg-slate-50">
                <h3 className="text-xl font-bold flex py-1 px-4 rounded-r-lg rounded-tl-lg items-center  text-white bg-blue-600">
                  Basic Information
                  <span className="pl-2">
                    <ImInfo />
                  </span>
                </h3>
                <div className="bg-blue-600 border-none">
                  <h3 className="text-sm font-bold flex text-slate-100 bg-slate-50 rounded-tl-lg relative overflow-hidden border-none">
                    <span className="absolute inset-x-0 inset-r-0 h-2 border-none"></span>
                    .
                  </h3>
                </div>
              </div>
            </div>

            {/* <h3 className="font-semibold p-2 text-lg">Basic Information</h3> */}
            <div className="flex p-2">
              <div className="w-1/3 font-medium">Employee Id:</div>
              <div className="w-2/3 flex justify-end">{employe_info.empId}</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/3 font-medium">Name:</div>
              <div className="w-2/3 flex justify-end">
                {employe_info.employeeName}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/3 font-medium">Department:</div>
              <div className="w-2/3 flex justify-end">
                {employe_info.department}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/3 font-medium">Designation:</div>
              <div className="w-2/3 flex justify-end">
                {employe_info.designation}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/3 font-medium">Joining Date:</div>
              <div className="w-2/3 flex justify-end">
                {parseDate(employe_info.joiningDate).toLocaleDateString()}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/3 font-medium">Reporting Manager:</div>
              <div className="w-2/3 flex justify-end">
                {employe_info.reportingManager}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 border-2 m-1 rounded-sm pt-1 bg-slate-50 drop-shadow-xl">
            <div className="flex">
              <div className=" bg-slate-50">
                <h3 className="text-xl font-bold flex py-1 px-4 rounded-r-lg rounded-tl-lg items-center  text-white bg-blue-600">
                  Assigned Courses
                  <span className="pl-2">
                    <FaBook />
                  </span>
                </h3>
                <div className=" bg-blue-600">
                  <h3 className="text-sm font-bold flex text-slate-100 bg-slate-50 rounded-tl-lg relative overflow-hidden">
                    <span className="absolute inset-x-0 inset-r-0 h-2 "></span>.
                  </h3>
                </div>
              </div>
            </div>

            {employe_info.courses.map((course) => (
              <div key={course} className="flex px-2 items-center">
                <IoChevronForwardCircleOutline />
                <CourseName course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
