import { useState } from "react";
import ShowQuizCard from "../components/quiz/ShowQuizCard";
import { useNavigate } from "react-router-dom";
import { useAllQuizs } from "../components/quiz/useAllQuiz";
import Spinner from "../../Common/Ui/Spinner";

import AddButton from "../ui/AddButton";
import { useQuizByCourseId } from "../components/quiz/useQuizByCourseId";

import CourseDropdown from "../ui/CourseDropDown";

export default function Quizzes() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const { isLoading, allQuizs } = useAllQuizs();

  const { quizs } = useQuizByCourseId(selectedOption);

  // State to store search query
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) return <Spinner />;

  // Filter quizzes based on the search query
  const filteredQuizzes = allQuizs.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Quizzes</h1>
        <AddButton
          title="Quiz"
          onClick={() => {
            navigate("/admin/quizzes/createQuiz");
          }}
        />
        {/* <div className="space-x-4 text-sm flex mt-0 pt-0 ">
          <button
            onClick={() => {
              navigate("/admin/quizzes/createQuiz");
            }}
            className="bg-blue-600 text-white font-semibold rounded-full px-3 py-2 flex items-center"
          >
            Create New Quiz
          </button>
        </div> */}
      </div>

      <div className="flex pb-2">
        <button
          className="ml-2  mt-4 py-2 w-full bg-green-500 text-white rounded font-bold"
          onClick={() => {}}
        >
          <div className="flex items-center justify-center">
            {/* <AiOutlineSelect /> */}
            <span className="px-2">Not Used Quizes</span>
          </div>
        </button>
        <button
          className="ml-2  mt-4 py-2 w-full bg-blue-500 text-white rounded font-bold"
          onClick={() => {}}
        >
          <div className="flex items-center justify-center">
            {/* <AiOutlineSelect /> */}
            <span className="px-2">Module Quizes</span>
          </div>
        </button>
        <button
          className="ml-2  mt-4 py-2 w-full bg-yellow-500 text-white rounded font-bold"
          onClick={() => {}}
        >
          <div className="flex items-center justify-center">
            {/* <AiOutlineSelect /> */}
            <span className="px-2">Department Quizes</span>
          </div>
        </button>
      </div>

      <div className="flex m-2 rounded-lg mr-2">
        <input
          type="search"
          placeholder="Search Quiz"
          className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="w-1/3 ml-2">
          <CourseDropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {!quizs
          ? filteredQuizzes.map((quiz) => (
              <ShowQuizCard
                key={quiz._id}
                id={quiz._id}
                title={quiz.title}
                moduleId={quiz.module}
                viewQuizHandler={() => {
                  navigate(`/admin/quizzes/viewQuiz/${quiz._id}`);
                }}
              />
            ))
          : quizs.map((quiz) => (
              <ShowQuizCard
                key={quiz._id}
                id={quiz._id}
                title={quiz.title}
                moduleId={quiz.module}
                viewQuizHandler={() => {
                  navigate(`/admin/quizzes/viewQuiz/${quiz._id}`);
                }}
              />
            ))}
      </div>
    </div>
  );
}
