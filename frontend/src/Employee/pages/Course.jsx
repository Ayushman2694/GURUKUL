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
import { useState } from "react";
import ReactPlayer from "react-player";
import VideoPlayer from "./VideoPlayer";
import { useCourseByCourseId } from "../../Admin/components/courses/useCourseByCourseId";

export default function Course() {
  const { courseId } = useParams();
  const [videoLink, setVideoLink] = useState("");
  const [videoDiscription, setVideoDiscription] = useState();
  const { isLoading: loadingModule, modules } = useModuleByCourseId(courseId);
  const { isLoading: loadingCourse, course } = useCourseByCourseId(courseId);

  if (loadingModule || loadingCourse) return <Spinner />;
  
  return (
    <div className="w-full p-4">
      <div className="md:grid md:grid-rows-9 md:grid-cols-4 md:gap-4">
        
        {/* Video Player Section */}
        <div className="md:row-span-4 md:col-span-3">
          {videoLink ? (
            <VideoPlayer videoLink={videoLink} />
          ) : (
            <img src={course?.thumbnail} className="w-full rounded" />
          )}
        </div>
        
        {/* Modules Section */}
        <div className="md:row-span-8 md:col-span-1 mt-4 md:mt-0 h-auto px-2">
          <div className="bg-slate-100 h-full shadow-lg shadow-stone-400 rounded-md overflow-y-auto">
            {modules.map((module) => (
              <Module
                key={module._id}
                videos={module.video}
                moduleName={module.moduleName}
                setVideoLink={setVideoLink}
                setVideoDiscription={setVideoDiscription}
              />
            ))}
          </div>
        </div>
        
        {/* Quizzes Section */}
        <div className="md:row-span-4 md:col-span-3 mt-8 md:mt-0 h-auto shadow-lg shadow-stone-400 rounded-lg border py-4">
          <p className="text-xl font-bold px-3">Quizzes</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-3">
            <StartQuizContainer />
            <StartQuizContainer />
            <StartQuizContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
