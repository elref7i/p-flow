import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDrug, deleteDrug, updateDrug } from "../api/drugApi";
import toast from "react-hot-toast";

//* Add Drug

export const useAddDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(addDrug, {
    onSuccess: () => {
      toast.success("Drug added successfully");
      queryClient.invalidateQueries(["drugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * Delete Drug
export const useDeleteDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDrug, {
    onSuccess: () => {
      toast.success("Drug deleted successfully");
      queryClient.invalidateQueries(["drugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * Update Drug
export const useUpdateDrug = () => {
  const queryClient = useQueryClient();
  return useMutation(updateDrug, {
    onSuccess: () => {
      toast.success("success");
      queryClient.invalidateQueries(["drugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};
