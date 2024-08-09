/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/Login";
import toast from "react-hot-toast";

export function useLogin() {
  const mutation = useMutation({
    mutationFn: (data) => loginApi(data),

    onSuccess: (data) => {
      toast.success("User Login Successfully");
    },
    onError: (err) => {
      toast.error("Provided employee ID or password are incorrect");
    },
  });

  const { mutate: login, status } = mutation;
  const isLoading = status === "pending";

  return { login, isLoading };
}
