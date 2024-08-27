/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import Spinner from "../../Common/Ui/Spinner";
import CourseName from "../Ui/CourseName";

export default function EmployeeInfo() {
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading, employe_info } = useEmployeeInfo(token);
  if (isLoading) return <Spinner />;

  return (
    <div className="flex w-full h-screen">
      <div className="w-full p-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold px-1">Employee Information</h1>
        </div>
        <div className="md:flex w-full py-4">
          <div className="w-full md:w-1/2 border m-1 rounded-sm bg-slate-50 drop-shadow-xl py-2">
            <h3 className="font-semibold p-2 text-lg">Basic Information</h3>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Employee Id:</div>
              <div className="w-1/2 flex justify-end">{employe_info.empId}</div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Name:</div>
              <div className="w-1/2 flex justify-end">
                {employe_info.employeeName}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Department:</div>
              <div className="w-1/2 flex justify-end">
                {employe_info.department}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Designation:</div>
              <div className="w-1/2 flex justify-end">
                {employe_info.designation}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Joining Date:</div>
              <div className="w-1/2 flex justify-end">
                {new Date(employe_info.joiningDate).toLocaleDateString()}
              </div>
            </div>
            <div className="flex p-2">
              <div className="w-1/2 font-medium">Reporting Manager:</div>
              <div className="w-1/2 flex justify-end">
                {employe_info.reportingManager}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 border-2 m-1 rounded-sm bg-slate-50 drop-shadow-xl">
            <h3 className="font-semibold p-2 text-lg">Assigned Courses</h3>
            {employe_info.courses.map((course) => (
              <CourseName key={course} course={course} />
            ))}
          </div>
        </div>
        <div className="w-full border m-1 rounded-sm bg-slate-50 drop-shadow-xl py-2">
          <h3 className="font-semibold px-2 text-lg">Certificates</h3>
          {/* Certificates will go here */}
        </div>
      </div>
    </div>
  );
}
