import { useQuery } from "@tanstack/react-query";
import { showAllCourse } from "../../service/courses";

export function useShowAllRespnse(quizId) {
  const { isLoading, data: allCourse } = useQuery({
    queryKey: ["AllRespnse", quizId],
    queryFn: () => showAllCourse(quizId),
  });

  return {
    isLoading,
    allCourse,
  };
}
