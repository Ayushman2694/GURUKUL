/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { adminSignup as adminSignupApi } from "../../service/auth";

export function useAdminSignup() {
  const mutation = useMutation({
    mutationFn: (data) => adminSignupApi(data),

    onSuccess: () => {
      toast.success("Admin Created Successfully");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Error While Creating Admin");
    },
  });

  const { mutate: adminSignup, status } = mutation;
  const isLoading = status === "pending";

  return { adminSignup, isLoading };
}
