/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import { useAllCourse } from "../../Admin/components/courses/useAllCourse";
import ShowMoreShowLess from "../../Common/Ui/ShowMoreShowLess";
import Spinner from "../../Common/Ui/Spinner";
import CourseThumbnail from "../component/courses/CourseThumbnail";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import { useCourseByEmpId } from "../../Admin/components/courses/useCourseByEmpId";

export default function EmployeeCourses() {
  const navigate = useNavigate();
  // const { isLoading, allCourse } = useAllCourse();

  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployee, employe_info } = useEmployeeInfo(token);
  const { isLoading, courses } = useCourseByEmpId(employe_info?.empId);

  if (isLoading || loadingEmployee) return <Spinner />;
  console.log(courses);

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

  const getMostRecentCourseForUser = (courses, userId) => {
    const recentCourse = courses
      .map((course) => {
        const userEntry = course.userStatus
          .filter((status) => status.user === userId)
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];

        return userEntry ? { ...course, recentStatus: userEntry } : null;
      })
      .filter((course) => course !== null)
      .sort(
        (a, b) =>
          new Date(b.recentStatus.updatedAt) -
          new Date(a.recentStatus.updatedAt)
      )[0];

    return recentCourse || null;
  };

  const mostRecentCourse = getMostRecentCourseForUser(
    courses,
    employe_info.empId
  );

  return (
    <div className="w-full p-4 h-full ">
      <div className="w-full">
        <h1 className="text-3xl font-bold px-1 pb-2">Current Courses</h1>
      </div>

      {!mostRecentCourse ? null : (
        <div className="w-full flex py-8 bg-slate-100 shadow-xl">
          <div className="w-1/2 px-2">
            <img
              className="w-full"
              src={mostRecentCourse?.thumbnail}
              alt="thumbnail"
            />
          </div>
          <div className="w-1/2 p-4 ">
            <p className="text-2xl font-bold pb-2">
              {mostRecentCourse?.courseTitle}
            </p>
            <p className="text-lg font-medium">
              <ShowMoreShowLess
                descriptionDetail={mostRecentCourse?.courseDescription}
                charNo={200}
              />
            </p>
            <button
              className="w-full bg-blue-600 text-slate-50 rounded-md font-bold text-sm p-1 my-8"
              onClick={() => {
                navigate("/course");
              }}
            >
              Continue Course
            </button>
          </div>
        </div>
      )}

      {coursesStatusMoreThan0LessThan100.length > 0 ? (
        <>
          <div className="w-full pt-10">
            <h1 className="text-3xl font-bold px-1">Ongoing Courses</h1>
          </div>
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
        </>
      ) : (
        <div className="w-full flex items-center justify-center">
          <p className="text-xl p-4 font-medium">
            No ongoing courses at the moment.
          </p>
        </div>
      )}

      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Courses Not Started</h1>
      </div>
      {coursesStatus0OrNotFound.length > 0 ? (
        <div className="flex flex-wrap pt-4 pb-12">
          {coursesStatus0OrNotFound.map((course) => (
            <CourseThumbnail key={course._id} course={course} progress={0} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center pb-20">
          <p className="text-xl p-4 font-medium">
            No courses available to start.
          </p>
        </div>
      )}

      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Courses Completed</h1>
      </div>
      {coursesStatus100.length > 0 ? (
        <div className="flex flex-wrap pt-4 pb-20">
          {coursesStatus100.map((course) => (
            <CourseThumbnail key={course._id} course={course} progress={100} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center pb-20">
          <p className="text-xl p-4 font-medium">No courses completed yet.</p>
        </div>
      )}
    </div>
  );
}
