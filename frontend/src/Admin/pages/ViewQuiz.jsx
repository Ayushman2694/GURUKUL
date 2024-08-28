/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate, useParams } from "react-router-dom";
import { useQuizId } from "../../Admin/components/quiz/useQuizById";
import { FaEye } from "react-icons/fa";
import TextQuestion from "../../Employee/component/quiz/TextQuestion";
import SingleCorrectQuestion from "../../Employee/component/quiz/SingleCorrectQuestion";
import MultipeCorrectQuestion from "../../Employee/component/quiz/MultipeCorrectQuestion";
import Spinner from "../../Common/Ui/Spinner";
import BackButton from "../../Common/Ui/BackButton";
import { useState } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import ShowAllQuizResponse from "../../Employee/component/quiz/ShowAllQuizResponse";
import { FaEyeSlash } from "react-icons/fa";
import { useAllCourse } from "../components/courses/useAllCourse";
import SelectModule from "../components/quiz/SelectModule";

export default function ViewQuiz() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { quizId } = useParams();
  const [answers, setAnswers] = useState([]);
  const { isloading, quiz } = useQuizId(quizId);
  const { isLoading: loadindCourses, allCourse } = useAllCourse();
  const [selectModule, setSelectModule] = useState(false);
  const [viewResponse, setViewResponse] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  if (isloading || loadindCourses) return <Spinner />;

  const filteredEmployees = allCourse?.filter((course) =>
    course.courseTitle.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <BackButton />
      <div className="flex w-full">
        <div
          className={`p-8  ${
            selectModule ? "w-9/12" : "w-full"
          } bg-gray-100  h-fit`}
        >
          <h1 className="text-4xl font-bold mb-4">{quiz?.title}</h1>

          <div className="flex pb-2">
            <button
              className="ml-2  mt-4 py-2 w-full bg-yellow-500 text-white rounded font-bold"
              onClick={() => setSelectModule((value) => !value)}
            >
              <div className="flex items-center justify-center">
                <AiOutlineSelect />
                <span className="px-2">Select Module</span>
              </div>
            </button>
            <button
              className="ml-2  mt-4 py-2 w-full bg-green-600 text-white rounded font-bold"
              onClick={() => setViewResponse((valve) => !valve)}
            >
              <div className="flex items-center justify-center">
                {viewResponse ? <FaEye /> : <FaEyeSlash />}
                <span className="px-2">
                  {viewResponse ? "Hide Response" : "View Response"}
                </span>
              </div>
            </button>
            <button
              className="ml-2  mt-4 py-2 w-full bg-blue-500 text-white rounded font-bold"
              onClick={() => {
                navigate(`/admin/quizzes/editQuiz/${quiz._id}`);
              }}
            >
              <div className="flex items-center justify-center">
                <TiPencil />
                <span className="px-2">Edit Quiz</span>
              </div>
            </button>
          </div>

          {viewResponse ? (
            <ShowAllQuizResponse quizId={quizId} />
          ) : (
            quiz?.questions.map((question, index) => {
              if (question.questionType === "text") {
                return (
                  <TextQuestion
                    key={index}
                    index={index}
                    question={question}
                    setAnswers={setAnswers}
                  />
                );
              } else if (question.questionType === "singleCorrect") {
                return (
                  <SingleCorrectQuestion
                    key={index}
                    index={index}
                    question={question}
                    setAnswers={setAnswers}
                  />
                );
              } else {
                return (
                  <MultipeCorrectQuestion
                    key={index}
                    index={index}
                    question={question}
                    setAnswers={setAnswers}
                  />
                );
              }
            })
          )}
        </div>
        {selectModule && (
          <div className="w-3/12 p-2 pl-0 bg-gray-100 pt-20">
            <div className="bg-slate-300 rounded">
              <div className="flex gap-2 p-2">
                <div className="w-full rounded ">
                  <input
                    type="text"
                    placeholder="Enter Course Name"
                    value={name} // Bind the value to the state
                    onChange={handleChange} // Update the state on change
                    className="shadow my-1 appearance-none border rounded w-full
                 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-slate-500"
                  />
                </div>
              </div>
              {filteredEmployees?.map((course) => (
                <div
                  key={course._id}
                  className="flex justify-center items-center border border-b-0 border-white"
                >
                  <div className="flex w-full justify-center items-center">
                    <div className="w-full">
                      <div className="text-lg font-bold text-center">
                        {course.courseTitle}
                      </div>
                      <div>
                        <SelectModule
                          courseId={course._id}
                          quizId={quizId}
                          setSelectModule={setSelectModule}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
