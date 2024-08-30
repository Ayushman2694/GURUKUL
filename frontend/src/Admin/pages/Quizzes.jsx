import React, { useState } from "react";
import ShowQuizCard from "../components/quiz/ShowQuizCard";
import { useNavigate } from "react-router-dom";
import { useAllQuizs } from "../components/quiz/useAllQuiz";
import Spinner from "../../Common/Ui/Spinner";

import AddButton from "../ui/AddButton";

import CourseDropdown from "../ui/CourseDropDown";

export default function Quizzes() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const { isLoading, allQuizs } = useAllQuizs();
  

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
        <h1 className="text-3xl font-bold mb-6">All Quizzes</h1>
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
        {filteredQuizzes.map((quiz) => (
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
