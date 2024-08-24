import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { assignCourse as assignCourseApi } from "../../service/employee";

export function useAssignCourse() {
  const mutation = useMutation({
    mutationFn: (data) => assignCourseApi(data),

    onSuccess: () => {
      toast.success("Course Assigned Successfully");
    },
    onError: () => {
      toast.error("Course Can't Be Assigned"); // Show the error message in a toast
    },
  });

  const { mutate: assignCourse, status } = mutation;
  const isLoading = status === "pending";

  return { assignCourse, isLoading };
}
