import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPromotion, updatePromotion } from "../api/promotion_api";
import toast from "react-hot-toast";

// ADD Promotion
export const useAddPromotion = () => {
  const queryClient = useQueryClient();

  return useMutation(addPromotion, {
    onSuccess: () => {
      toast.success("added Promotion successfully!");
      queryClient.refetchQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to add promotion. Please try again later. "
      );
      console.error(error);
    },
  });
};

// Update Promotion
export const useUpdatePromotion = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePromotion, {
    onSuccess: () => {
      toast.success("updated Promotion successfully!");
      queryClient.refetchQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed to update promotion. Please try again later. "
      );
      console.error(error);
    },
  });
};
