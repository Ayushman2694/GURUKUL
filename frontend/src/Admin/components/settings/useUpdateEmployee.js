import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {updateEmployee as updateEmployeeApi } from "../../service/employee";

export function useUpdateEmployee() {
  const mutation = useMutation({
    mutationFn: (data) => updateEmployeeApi(data),

    onSuccess: () => {
      toast.success("Employee updated Successfully");
    },
    onError: (err) => {
      toast.error(err.message); // Show the error message in a toast
    },
  });

  const { mutate: updateEmployee, status } = mutation;
  const isLoading = status === "pending";

  return { updateEmployee, isLoading };
}
