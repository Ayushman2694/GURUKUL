import { useNavigate } from "react-router-dom";
import ShowQuizCard from "../../Admin/components/quiz/ShowQuizCard";
import { useAllQuizs } from "../../Admin/components/quiz/useAllQuiz";
import Spinner from "../../Common/Ui/Spinner";
import { useState } from "react";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";

export default function EmployeeQuiz() {
  const navigate = useNavigate();
  const { isLoading, allQuizs } = useAllQuizs();

  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployee, employe_info } = useEmployeeInfo(token);

  if (isLoading || loadingEmployee) return <Spinner />;

  const withDepartment = allQuizs.filter(
    (quiz) =>
      quiz.department &&
      quiz.department.length > 0 &&
      quiz.department.includes(employe_info.department)
  );

  console.log(withDepartment);

  return (
    <div className="min-h-screen w-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quizzes</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 my-6">
        {withDepartment.length > 0 &&
          withDepartment?.map((quiz) => {
            // console.log(quiz.attemptedBy);
            // console.log(quiz.passedBy);
            return (
              <ShowQuizCard
                key={quiz._id}
                quiz={quiz}
                attempted={quiz.attemptedBy}
                passed={quiz.passedBy}
                id={quiz._id}
                title={quiz.title}
                moduleId={quiz.module}
                isEmployee={true}
                department=""
                viewQuizHandler={() => {
                  navigate(`/employee/quiz/${quiz._id}`);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
