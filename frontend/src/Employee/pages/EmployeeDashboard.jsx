/* eslint-disable no-unused-vars */
// src/pages/Dashboard.jsx

import CourseThumbnail from "../component/courses/CourseThumbnail";
import DashboardCard from "../component/dashboard/DashboardCard";
import Spinner from "../../Common/Ui/Spinner";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { PiEmptyBold } from "react-icons/pi";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { useCourseByEmpId } from "../../Admin/components/courses/useCourseByEmpId";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployeeInfo, employe_info } =
    useEmployeeInfo(token);
  const { isLoading: loadingCourseByEmpId, courses: courseByEmpId } =
    useCourseByEmpId(employe_info?.empId);


  if (loadingCourseByEmpId || loadingEmployeeInfo )
    return <Spinner />;



  const coursesStatus0OrNotFound = [];
  const coursesStatusMoreThan0LessThan100 = [];
  const coursesStatus100 = [];

  courseByEmpId.forEach((course) => {
    const userStatus = course?.userStatus.find(
      (user) => user.user === employe_info?.empId
    );

    if (userStatus) {
      if (userStatus.status === 0) {
        coursesStatus0OrNotFound.push(course);
      } else if (userStatus.status > 0 && userStatus.status < 100) {
        coursesStatusMoreThan0LessThan100.push(course);
      } else if (userStatus.status === 100) {
        coursesStatus100.push(course);
      }
    } else {
      // If userStatus is not found, push the course to the status 0 array
      coursesStatus0OrNotFound.push(course);
    }
  });

  return (
    <div className="p-4 w-full bg-white min-h-screen">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl md:text-4xl w-1/2 font-bold mb-4">Dashboard</h1>
        <p className="text-sm md:text-xl  mb-4 pt-2 font-medium">
          {" "}
          {`Employee ID : ${employe_info.empId}`}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
        <DashboardCard
          title="Courses Completed"
          icon={<MdOutlineBookmarkAdded />}
          courses={coursesStatus100}
        />
        <DashboardCard
          title="Courses Enrolled"
          icon={<MdOutlineBookmarkBorder />}
          courses={courseByEmpId}
        />
        <DashboardCard
          title="Courses Not Started"
          icon={<MdOutlineBookmarkAdd />}
          courses={coursesStatus0OrNotFound}
        />
        <DashboardCard
          title="Certificates Earned"
          icon={<GrCertificate />}
          courses={coursesStatus100}
          Certificate={true}
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Ongoing Courses</h2>
      <div className="flex flex-col lg:grid-cols-3 gap-4 md-2">
        {coursesStatusMoreThan0LessThan100.length > 0 ? (
          <div className="flex flex-wrap pt-4 pb-12">
            {coursesStatusMoreThan0LessThan100.map((course) => (
              <CourseThumbnail
                key={course._id}
                course={course}
                progress={
                  course.userStatus.find(
                    (user) => user.user === employe_info.empId
                  )?.status || 0
                }
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center">
            <div>
              <div className="w-full flex items-center justify-center">
                <p className="text-8xl">
                  <PiEmptyBold />
                </p>
              </div>
              <p className="text-xl py-2 px-4 font-medium">
                No ongoing courses at the moment.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-full border m-1 rounded-sm bg-slate-50 drop-shadow-xl md:py-2">
        <div className="flex">
          <div className=" bg-slate-50">
            <h3 className="text-xl font-bold flex py-1 px-4 rounded-r-lg rounded-tl-lg items-center  text-white bg-blue-600">
              Certificates
              <span className="pl-2">
                <PiCertificateBold />
              </span>
            </h3>
            <div className=" bg-blue-600">
              <h3 className="text-sm font-bold flex text-slate-100 bg-slate-100 rounded-tl-lg relative overflow-hidden">
                <span className="absolute inset-x-0 inset-r-0 h-2 "></span>.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex p-2 flex-wrap">
          {coursesStatus100.map((course) => (
            <div key={course._id} className="border rounded shadow p-2 w-3/12">
              <div className="flex w-full justify-center">
                <div className="w-full">
                  <div className="flex justify-center  items-center text-xl font-bold pb-2 text-center hover:underline">
                    {course.courseTitle}
                    <span className="px-2">
                      <PiCertificateBold />
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      navigate(
                        `/certificate/${employe_info.employeeName}/${course.courseTitle}/${employe_info.department}`
                      );
                    }}
                    className="bg-blue-600 w-full rounded px-3 py-1 text-white"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
