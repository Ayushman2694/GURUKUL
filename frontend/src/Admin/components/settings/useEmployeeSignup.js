import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { employeeSignup as employeeSignupApi } from "../../service/auth";

export function useEmployeeSignup() {
  const mutation = useMutation({
    mutationFn: (data) => employeeSignupApi(data),

    onSuccess: () => {
      toast.success("Admin Created Successfully");
    },
    onError: (err) => {
      toast.error(err.message); // Show the error message in a toast
    },
  });

  const { mutate: employeeSignup, status } = mutation;
  const isLoading = status === "pending";

  return { employeeSignup, isLoading };
}