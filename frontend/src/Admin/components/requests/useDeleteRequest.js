import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { removeRequest as removeRequestApi } from "../../service/requests";

export function useDeleteRequest() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => removeRequestApi(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allRequest"] });
      toast.success("Request Declined");
    },
    onError: () => {
      toast.error("Request Can't Declined"); // Show the error message in a toast
    },
  });

  const { mutate: removeRequest, status } = mutation;
  const isLoading = status === "pending";

  return { removeRequest, isLoading };
}
