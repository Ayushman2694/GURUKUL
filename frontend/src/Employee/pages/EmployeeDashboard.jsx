/* eslint-disable no-unused-vars */
// src/pages/Dashboard.jsx

import CourseThumbnail from "../component/courses/CourseThumbnail";
import DashboardCard from "../component/dashboard/DashboardCard";
import Spinner from "../../Common/Ui/Spinner";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import { useState } from "react";
import { useAllCourse } from "../../Admin/components/courses/useAllCourse";
import { useCourseNotByEmpId } from "../../Admin/components/courses/useCourseNotDepartmentName";
import { GrCertificate } from "react-icons/gr";
import { PiEmptyBold } from "react-icons/pi";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useCourseByEmpId } from "../../Admin/components/courses/useCourseByEmpId";

export default function EmployeeDashboard() {
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployeeInfo, employe_info } =
    useEmployeeInfo(token);
  const { isLoading: loadingCourseByEmpId, courses: courseByEmpId } =
    useCourseByEmpId(employe_info?.empId);
  const { isLoading, courses } = useCourseNotByEmpId(employe_info?.empId);

  if (loadingCourseByEmpId || loadingEmployeeInfo || isLoading)
    return <Spinner />;

  console.log(courses);
  console.log(courseByEmpId);

  const coursesStatus0OrNotFound = [];
  const coursesStatusMoreThan0LessThan100 = [];
  const coursesStatus100 = [];

  courses.forEach((course) => {
    const userStatus = course.userStatus.find(
      (user) => user.user === employe_info.empId
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
      <h2 className="text-2xl font-bold mb-4">More Courses</h2>
      <div className="flex flex-wrap pt-4 pb-20">
        {courses.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            <div>
              <div className="w-full flex items-center justify-center">
                <p className="text-8xl">
                  <PiEmptyBold />
                </p>
              </div>
              <p className="text-xl py-2 px-4 font-medium">
                No More Course To Enroll
              </p>
            </div>
          </div>
        ) : (
          courses?.map((course) => (
            <CourseThumbnail
              key={course._id}
              course={course}
              notEnorll={true}
            />
          ))
        )}
      </div>
    </div>
  );
}
