import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addCourse as addCourseApi } from "../../service/courses";

export function useAddCourse() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => addCourseApi(data),

    onSuccess: (data) => {
      console.log(data.course);
      queryClient.setQueryData(["course", data.course._id], data.course);
      toast.success("Course Created Successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message); // Show the error message in a toast
    },
  });

  const { mutate: addCourse, status } = mutation;
  const isLoading = status === "pending";

  return { addCourse, isLoading };
}