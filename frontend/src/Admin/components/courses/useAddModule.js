import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { addModule as addModuleApi } from "../../service/module";

export function useAddModule() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => addModuleApi(data),

    onSuccess: (data) => {
      queryClient.setQueryData(["module", data.module._id], data.module);
      toast.success("Module Uploaded Successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Module Can't Be Uploaded"); // Show the error message in a toast
    },
  });

  const { mutate: addModule, status } = mutation;
  const isLoading = status === "pending";

  return { addModule, isLoading };
}
