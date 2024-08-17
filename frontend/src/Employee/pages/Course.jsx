import { useParams } from "react-router-dom";
import Module from "../component/courses/Module";
import StartQuizContainer from "../component/quiz/StartQuizContainer";
import { useModuleByCourseId } from "../../Admin/components/courses/useModuleByCourseId";
import Spinner from "../../Common/Ui/Spinner";

export default function Course() {
  const { courseId } = useParams();
  const { isLoading, modules } = useModuleByCourseId(courseId);

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full flex p-4">
      <div className="w-9/12 overflow-y-auto pb-20">
        <img
          className="w-full rounded-lg"
          src="/default_image.png"
          alt="thumbnail"
        />

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
