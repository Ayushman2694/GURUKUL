import ProgressBar from "../../../Common/Ui/ProgressBar";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CourseThumbnail({ progress }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-1/2 md:w-1/3 p-1 py-2 "
      onClick={() => navigate("/course")}
    >
      <div className="bg-slate-100 p-4 rounded-md shadow-xl">
        <div className="flex justify-center">
          <img src="/default_image.png" alt="thumbnail" />
        </div>

        <h5 className="px-2 pt-2 text-lg font-bold">Course Name</h5>
        <h6 className="px-2 text-sm">Department</h6>
        {!(progress === 0) ? (
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
      </div>
    </div>
  );
}
