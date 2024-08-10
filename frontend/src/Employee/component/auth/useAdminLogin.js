/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { adminlogin as AdminloginApi } from "../../../Common/service/auth";
import toast from "react-hot-toast";

export function useAdminLogin() {
  const mutation = useMutation({
    mutationFn: (data) => AdminloginApi(data),

    onSuccess: () => {
      toast.success("Admin Login Successfully");
    },
    onError: (err) => {
      toast.error("Provided Email or password are incorrect");
    },
  });

  const { mutate: adminLogin, status } = mutation;
  const isLoading = status === "pending";

  return { adminLogin, isLoading };
}
