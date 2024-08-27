/* eslint-disable no-unused-vars */
import ProgressBar from "../../../Common/Ui/ProgressBar";
import { useNavigate } from "react-router-dom";
import ShowMoreShowLess from "../../../Common/Ui/ShowMoreShowLess";
import { useSendRequestsForCourse } from "../../../Admin/components/requests/useSendRequestsForCourse";
import { employeInfo } from "../../services/employe_info";
import { useEmployeeInfo } from "../employee_info/useEmployeeInfo";
import { useState } from "react";
import Spinner from "../../../Common/Ui/Spinner";
import { useAllRequest } from "../../../Admin/components/requests/useAllRequests";

/* eslint-disable react/prop-types */
export default function CourseThumbnail({
  progress,
  course,
  notEnorll = false,
}) {
  const navigate = useNavigate();
  const { sendRequestsForCourse, isLoading: sendingRequest } =
    useSendRequestsForCourse();
  const { isLoading, allRequest } = useAllRequest();
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployee, employe_info } = useEmployeeInfo(token);
  if (isLoading || loadingEmployee) return <Spinner />;
  const allreadyRequested = allRequest.some(
    (item) => item.courseId === course._id && item.empId === employe_info.empId
  );

  return (
    <div
      className="w-1/2 md:w-1/3 p-1 py-2 "
      onClick={() => {
        notEnorll ? null : navigate(`/employee/course/${course._id}`);
      }}
    >
      <div className="bg-slate-100 p-4 rounded-md shadow-xl">
        <div className="flex justify-center">
          <img src={course?.thumbnail} alt="thumbnail" className="w-full" />
        </div>

        <h5 className="px-2 pt-2 text-lg font-bold">{course?.courseTitle}</h5>
        <h6 className="px-2 text-sm">
          <ShowMoreShowLess
            descriptionDetail={course?.courseDescription}
            charNo="50"
          />
        </h6>
        {notEnorll ? (
          <button
            disabled={sendingRequest || allreadyRequested}
            onClick={() => {
              sendRequestsForCourse({
                courseId: course._id,
                courseTitle: course.courseTitle,
                empId: employe_info.empId,
                employeeName: employe_info.employeeName,
              });
            }}
            className={`w-full ${
              allreadyRequested ? "bg-gray-600" : "bg-blue-600"
            } text-slate-50 rounded-md mx-2 font-bold text-sm p-1 my-2`}
          >
            {allreadyRequested ? "Requested" : "Enorll"}
          </button>
        ) : !(progress === 0) ? (
          !(progress === 100) ? (
            <ProgressBar progress={progress} />
          ) : (
            <p className=" p-2 font-bold text-md text-blue-700">Completed</p>
          )
        ) : (
          <button className="w-full bg-blue-600 text-slate-50 rounded-md mx-2 font-bold text-sm p-1 my-2">
            Start Course
          </button>
        )}
        {}
      </div>
    </div>
  );
}
