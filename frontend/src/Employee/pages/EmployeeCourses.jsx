/* eslint-disable no-unused-vars */

import ShowMoreShowLess from "../../Common/Ui/ShowMoreShowLess";
import Spinner from "../../Common/Ui/Spinner";
import CourseThumbnail from "../component/courses/CourseThumbnail";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import { useCourseByEmpId } from "../../Admin/components/courses/useCourseByEmpId";
import { PiEmptyBold } from "react-icons/pi";
import { useCourseNotByEmpId } from "../../Admin/components/courses/useCourseNotDepartmentName";

export default function EmployeeCourses() {
  const navigate = useNavigate();
  // const { isLoading, allCourse } = useAllCourse();

  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployee, employe_info } = useEmployeeInfo(token);
  const { isLoading, courses } = useCourseByEmpId(employe_info?.empId);
  const { isLoading: loadingMoreCourse, courses: moreCourse } =
    useCourseNotByEmpId(employe_info?.empId);



  if (isLoading || loadingEmployee || loadingMoreCourse) return <Spinner />;




  // Separate courses into different categories based on status
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

  const getMostRecentCourseForUser = (courses, currentCourse) => {
    return courses.find((course) => course._id === currentCourse);
  };

  const mostRecentCourse = getMostRecentCourseForUser(
    courses,
    employe_info.currentCourse
  );

  return (
    <div className="w-full p-4 h-full ">
      {!mostRecentCourse ? null : (
        <>
          <div className="w-full flex">
            <h1 className="md:text-3xl font-bold bg-blue-600 text-white pr-8 pl-2 shadow shadow-black py-1 rounded-r-full">
              Current Courses
            </h1>
          </div>
          <div className="w-full md:flex py-2 bg-slate-100 shadow-xl">
            <div className="md:w-1/2 px-2">
              <img
                className="w-full"
                src={mostRecentCourse?.thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className="md:w-1/2 p-4 flex flex-col">
              <p className="text-2xl font-bold pb-2">
                {mostRecentCourse?.courseTitle}
              </p>
              <div className="text-lg font-medium">
                <ShowMoreShowLess
                  descriptionDetail={mostRecentCourse?.courseDescription}
                  charNo={200}
                />
              </div>
              <button
                className="w-full bg-blue-600 text-slate-50 rounded-md font-bold text-sm p-1 mt-auto"
                onClick={() => {
                  navigate(`/employee/course/${mostRecentCourse?._id}`);
                }}
              >
                Continue Course
              </button>
            </div>
          </div>
        </>
      )}

      <div className="w-full flex pt-4">
        <h1 className="md:text-3xl font-bold  bg-blue-600 text-white pr-8 pl-2 shadow shadow-black py-1 rounded-r-full">
          Ongoing Courses
        </h1>
      </div>

      {coursesStatusMoreThan0LessThan100.length > 0 ? (
        <>
          <div className="flex flex-wrap pt-4 ">
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
        </>
      ) : (
        <div className="w-full flex items-center justify-center py-2">
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

      <div className="w-full flex pt-4">
        <h1 className="md:text-3xl font-bold  bg-blue-600 text-white pr-8 pl-2 shadow shadow-black py-1 rounded-r-full">
          Courses Not Started
        </h1>
      </div>
      {coursesStatus0OrNotFound.length > 0 ? (
        <div className="flex flex-wrap pt-4 ">
          {coursesStatus0OrNotFound.map((course) => (
            <CourseThumbnail key={course._id} course={course} progress={0} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center py-2">
          <div>
            <div className="w-full flex items-center justify-center">
              <p className="text-8xl">
                <PiEmptyBold />
              </p>
            </div>
            <p className="text-xl py-2 px-4 font-medium">
              No courses available to start.
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex pt-4">
        <h1 className="md:text-3xl font-bold  bg-blue-600 text-white pr-8 pl-2 shadow shadow-black py-1 rounded-r-full">
          Courses Completed
        </h1>
      </div>
      {coursesStatus100.length > 0 ? (
        <div className="flex flex-wrap pt-4 ">
          {coursesStatus100.map((course) => (
            <CourseThumbnail key={course._id} course={course} progress={100} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center py-2">
          <div>
            <div className="w-full flex items-center justify-center">
              <p className="text-8xl">
                <PiEmptyBold />
              </p>
            </div>
            <p className="text-xl py-2 px-4 font-medium">
              No courses completed yet.
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex pt-4">
        <h1 className="md:text-3xl font-bold  bg-blue-600 text-white pr-8 pl-2 shadow shadow-black py-1 rounded-r-full">
          More Courses
        </h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-20">
        {moreCourse.length === 0 ? (
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
