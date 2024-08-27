import { FaPlusCircle, FaUserPlus, FaQuestionCircle } from "react-icons/fa";
import AdminDashboardCard from "../components/dashboard/AdminDashboardCard";
import AdminDashboardPercent from "../components/dashboard/AdminDashboardPercent";
import AdminDashboardBar from "../components/dashboard/AdminDashboardBar";
import { useNavigate } from "react-router-dom";
import { useAllCourse } from "../components/courses/useAllCourse";
import { useAllEmployee } from "../components/settings/useAllEmployee";
import Spinner from "../../Common/Ui/Spinner";
import CourseDropdown from "../ui/CourseDropDown";
import { useState } from "react";
import { useQuizByCourseId } from "../components/quiz/useQuizByCourseId";

export default function AdminDashboard() {
  const { isLoading: loadindCourses, allCourse } = useAllCourse();
  const { isLoading: loadingAllEmployee, allEmployee } = useAllEmployee();
  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();
  const { isLoading: loadingQuizs, quizs } = useQuizByCourseId(
    selectedOption || null
  );

  if (loadindCourses || loadingAllEmployee || loadingQuizs) return <Spinner />;

  console.log(quizs);
  const courseCount = allCourse ? allCourse.length : 0;
  const employeeCount = allEmployee ? allEmployee.length : 0;

  let usersWithStatus100;
  let usersWithStatusLessThan100;
  if (selectedOption) {
    const foundCourse = allCourse.find(
      (course) => course._id === selectedOption
    );
    usersWithStatus100 = foundCourse.userStatus.filter(
      (user) => user.status === 100
    ).length;
    usersWithStatusLessThan100 = foundCourse.userStatus.filter(
      (user) => user.status < 100
    ).length;
  }

  const passedBySet = new Set();
  quizs?.forEach((quiz) =>
    quiz.passedBy.forEach((empId) => passedBySet.add(empId))
  );
  const allPassedEmployees = Array.from(passedBySet);
  const employeesPassedAllQuizzes = allPassedEmployees.filter((empId) =>
    quizs?.every((quiz) => quiz.passedBy.includes(empId))
  );

  const allAttemptedBy = quizs?.flatMap((quiz) => quiz.attemptedBy);
  const uniqueAttemptedBy = new Set(allAttemptedBy);
  const uniqueAttemptedByArray = Array.from(uniqueAttemptedBy);
  console.log("Unique employee IDs in attemptedBy:", uniqueAttemptedByArray);

  const attemptedBySet = new Set();
  quizs?.forEach((quiz) =>
    quiz.attemptedBy.forEach((empId) => attemptedBySet.add(empId))
  );

  const passeBySet = new Set();
  quizs?.forEach((quiz) =>
    quiz.passedBy.forEach((empId) => passeBySet.add(empId))
  );

  const attemptedByArray = Array.from(attemptedBySet);
  const passedByArray = Array.from(passeBySet);

  const attemptedNotPassed = attemptedByArray.filter(
    (empId) => !passedByArray.includes(empId)
  );

  console.log(
    "Employees who attempted quizzes but did not pass any:",
    attemptedNotPassed
  );

  return (
    <div className="min-h-screen w-full bg-white p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="space-x-4 space-y-2 md:space-x-4 md:space-y-0 text-sm flex flex-row md:flex-row mt-0 pt-0">
          <button
            onClick={() => {
              navigate("/admin/addCourse");
            }}
            className="text-blue-600 flex items-center"
          >
            <FaPlusCircle className="mr-2" /> Add Course
          </button>
          <button
            onClick={() => {
              navigate("/admin/employeeSignUp");
            }}
            className="text-green-600 flex items-center"
          >
            <FaUserPlus className="mr-2" /> Add Employee
          </button>
          <button
            onClick={() => {
              navigate("/admin/createQuiz");
            }}
            className="text-purple-600 flex items-center"
          >
            <FaQuestionCircle className="mr-2" /> Add Quiz
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <AdminDashboardCard title="Total Courses" number={courseCount} />
        <AdminDashboardCard title="Assigned Courses" number="5" />
        <AdminDashboardCard title="Total Users" number={employeeCount} />
      </div>

      <div className="bg-gray-50 shadow-md rounded-lg my-4 mb-6">
        <CourseDropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div className="bg-gray-50 h-auto shadow-md rounded-lg p-4 mb-6">
        <h1 className="text-xl font-semibold mb-6">Compliance Matrics</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <AdminDashboardPercent
            percent={((usersWithStatus100 / employeeCount) * 100).toFixed(2)}
            description="completed the course"
          />
          <AdminDashboardPercent
            percent={(
              (usersWithStatusLessThan100 / employeeCount) *
              100
            ).toFixed(2)}
            description="of employee curently doing the course"
          />
          <AdminDashboardPercent
            percent={(
              ((employeeCount -
                usersWithStatus100 -
                usersWithStatusLessThan100) /
                employeeCount) *
              100
            ).toFixed(2)}
            description="of employee not startd the course"
          />
          <AdminDashboardPercent
            percent={(
              (employeesPassedAllQuizzes.length / employeeCount) *
              100
            ).toFixed(2)}
            description="of employee passed all quizes"
          />
          <AdminDashboardPercent
            percent={(
              ((employeeCount - attemptedNotPassed.length) / employeeCount) *
              100
            ).toFixed(2)}
            description="of employee failed a quizes"
          />
          <AdminDashboardPercent
            percent={(
              ((employeeCount - uniqueAttemptedByArray.length) /
                employeeCount) *
              100
            ).toFixed(2)}
            description="of employee not started Quiz"
          />
        </div>

        <div className="bg-gray-100 h-auto mb-4 py-2 px-2 rounded-lg">
          <AdminDashboardBar percent="52" />
          <AdminDashboardBar percent="44" />
          <AdminDashboardBar percent="98" />
          <AdminDashboardBar percent="24" />
          <AdminDashboardBar percent="39" />
          <AdminDashboardBar percent="75" />
          <button className="bg-blue-600 mb-14 text-white w-full py-2 rounded-full hover:bg-blue-700">
            Download Metrics
          </button>
        </div>
      </div>
    </div>
  );
}
