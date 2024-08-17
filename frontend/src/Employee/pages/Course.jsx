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
    <div className="w-full flex p-4">
      <div className="w-9/12 overflow-y-auto pb-20">
        {/* {videoLink && <ReactPlayer url={videoLink} width="100%" controls />} */}
        {videoLink ? (
          <VideoPlayer videoLink={videoLink} />
        ) : (
          <img src={course?.thumbnail} className="w-full rounded" />
        )}

        <div className="w-full shadow-lg shadow-stone-400 rounded-lg border py-4 mt-8">
          <p className="text-xl font-bold px-3"> Quizzes</p>
          <div className="flex flex-wrap">
            <StartQuizContainer />
            <StartQuizContainer />
            <StartQuizContainer />
          </div>
        </div>
      </div>

      <div className="w-3/12 h-full  px-2 pb-16 ">
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
    </div>
  );
}
