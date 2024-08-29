import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { bulkEmployees as bulkEmployeesApi } from "../../service/employee";

export function useBulkEmployess() {
  const mutation = useMutation({
    mutationFn: (data) => bulkEmployeesApi(data),

    onSuccess: () => {
      toast.success("Csv Uploaded Successfully");
    },
    onError: (err) => {
      toast.error(err.message); // Show the error message in a toast
    },
  });

  const { mutate: bulkEmployees, status } = mutation;
  const isLoading = status === "pending";

  return { bulkEmployees, isLoading };
}
