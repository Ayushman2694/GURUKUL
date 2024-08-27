import ShowQuizCard from "../components/quiz/ShowQuizCard";
import { useNavigate } from "react-router-dom";
import { useAllQuizs } from "../components/quiz/useAllQuiz";
import Spinner from "../../Common/Ui/Spinner";

export default function Quizzes() {
  const navigate = useNavigate();
  const { isLoading, allQuizs } = useAllQuizs();
  if (isLoading) return <Spinner />;

  console.log(allQuizs);
  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">All Quizzes</h1>
        <div className="space-x-4 text-sm flex mt-0 pt-0 ">
          <button
            onClick={() => {
              navigate("/admin/quizzes/createQuiz");
            }}
            className="bg-blue-600 text-white font-semibold rounded-full px-3 py-2 flex items-center"
          >
            Create New Quiz
          </button>
        </div>
      </div>
      <div className="m-2 rounded-full">
        <input
          type="search"
          placeholder="Search Quiz"
          className="w-full h-10  bg-gray-100  rounded-full px-3"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {allQuizs.map((quiz) => (
          <ShowQuizCard
            key={quiz._id}
            title={quiz.title}
            description={quiz.module}
            viewQuizHandler={() => {
              navigate(`/admin/quizzes/viewQuiz/${quiz._id}`);
            }}
            EditQuizHandler={() => {
              navigate(`/admin/quizzes/editQuiz/${quiz._id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
