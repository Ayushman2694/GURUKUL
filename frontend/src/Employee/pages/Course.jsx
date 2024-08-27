// /* eslint-disable no-unused-vars */
// import { useParams } from "react-router-dom";
// import Module from "../component/courses/Module";
// import StartQuizContainer from "../component/quiz/StartQuizContainer";
// import { useModuleByCourseId } from "../../Admin/components/courses/useModuleByCourseId";
// import Spinner from "../../Common/Ui/Spinner";
// import { useState } from "react";
// import ReactPlayer from "react-player";
// import VideoPlayer from "./VideoPlayer";
// import { useCourseByCourseId } from "../../Admin/components/courses/useCourseByCourseId";

// export default function Course() {
//   const { courseId } = useParams();
//   const [videoLink, setVideoLink] = useState("");
//   const [videoDiscription, setVideoDiscription] = useState();
//   const { isLoading: loadingModule, modules } = useModuleByCourseId(courseId);
//   const { isLoading: loadingCourse, course } = useCourseByCourseId(courseId);

//   if (loadingModule || loadingCourse) return <Spinner />;
//   return (
//     <div className="w-full grid md:flex p-4">
//       <div className="md:w-9/12 overflow-y-auto pb-20">
//         <div>
//             {/* {videoLink && <ReactPlayer url={videoLink} width="100%" controls />} */}
//           {videoLink ? (
//             <VideoPlayer videoLink={videoLink} />
//           ) : (
//             <img src={course?.thumbnail} className="w-full rounded" />
//           )}
//         </div>

//         <div className="w-full shadow-lg shadow-stone-400 rounded-lg border py-4 mt-8">
//           <p className="text-xl font-bold px-3"> Quizzes</p>
//           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-8">
//             <StartQuizContainer />
//             <StartQuizContainer />
//             <StartQuizContainer />
//           </div>
//         </div>
//       </div>

//       <div className="md:w-3/12 h-full  px-2 pb-16 ">
//         <div className="bg-slate-100 h-full shadow-lg shadow-stone-400 rounded-md overflow-y-auto">
//           {modules.map((module) => (
//             <Module
//               key={module._id}
//               videos={module.video}
//               moduleName={module.moduleName}
//               setVideoLink={setVideoLink}
//               setVideoDiscription={setVideoDiscription}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Module from "../component/courses/Module";
import StartQuizContainer from "../component/quiz/StartQuizContainer";
import { useModuleByCourseId } from "../../Admin/components/courses/useModuleByCourseId";
import Spinner from "../../Common/Ui/Spinner";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";
import { useCourseByCourseId } from "../../Admin/components/courses/useCourseByCourseId";
import { useVideoByCourseId } from "../../Admin/components/courses/useVideoByCourseId";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import { useUpdateCourseStatus } from "../../Admin/components/courses/useUpdateCourseStatus";

export default function Course() {
  const { courseId } = useParams();
  const [videoLink, setVideoLink] = useState("");
  const [videoDiscription, setVideoDiscription] = useState("");
  const [videoId, setVideoId] = useState("");
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployee, employe_info } = useEmployeeInfo(token);
  const { isLoading: loadingModule, modules } = useModuleByCourseId(courseId);
  const { isLoading: loadingCourse, course } = useCourseByCourseId(courseId);
  const { isLoading, videos: ModuleVidos } = useVideoByCourseId(courseId);

  if (loadingModule || loadingCourse || isLoading || loadingEmployee)
    return <Spinner />;

  const sortedmodules = modules.sort((a, b) => a.moduleNo - b.moduleNo);

  const length = ModuleVidos.length;
  const watchedCount = ModuleVidos.filter((item) =>
    item.watchedBy.includes(employe_info.empId)
  ).length;
  const percentage = Math.round((watchedCount / length) * 100);

  return (
    <div className="w-full  md:flex p-4">
      <div className=" w-full md:w-9/12  overflow-y-auto pb-3 md:pb-20">
        {videoLink ? (
          <VideoPlayer
            videoLink={videoLink}
            videoId={videoId}
            courseId={courseId}
            percentage={percentage}
          />
        ) : (
          <img src={course?.thumbnail} className="w-full rounded" />
        )}

        {videoDiscription && (
          <div className="w-full  shadow rounded-lg border p-4 mt-8 ">
            <h3 className="text-md pb-2 font-bold">Video Discription</h3>
            {videoDiscription}
          </div>
        )}

        <div className="w-full  shadow rounded-lg border p-4 mt-4 ">
          <h3 className="text-md pb-2 font-bold">Course Discription</h3>
          {course.courseDescription}
        </div>
      </div>

      <div className="w-full md:w-3/12 h-full  px-2 pb-16 ">
        <div className="bg-slate-100 h-full shadow-lg shadow-stone-400 rounded-md overflow-y-auto">
          {sortedmodules.map((module) => (
            <Module
              key={module._id}
              moduleId={module._id}
              id={courseId}
              videos={module.video}
              moduleName={module.moduleName}
              setVideoLink={setVideoLink}
              setVideoDiscription={setVideoDiscription}
              setVideoId={setVideoId}
              empId={employe_info.empId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
