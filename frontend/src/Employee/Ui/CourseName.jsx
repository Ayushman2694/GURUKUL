/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useCourseByCourseId } from "../../Admin/components/courses/useCourseByCourseId";
import SpinnerMini from "../../Common/Ui/SpinnerMini";

export default function CourseName({ course }) {
  const navigate = useNavigate();
  const { isLoading, course: courseName } = useCourseByCourseId(course);

  if (isLoading) return <SpinnerMini />;
  return (
    <p
      className="px-2 py-1 hover:underline cursor-pointer"
      onClick={() => {
        navigate(`/employee/course/${course}`);
      }}
    >
      {courseName.courseTitle}
    </p>
  );
}
