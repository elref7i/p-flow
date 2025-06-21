import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPromotion,
  getPromotions,
  updatePromotion,
} from "../api/promotion_api";
import toast from "react-hot-toast";

//Get all Promotions
export const usePromotions = ({ token }) => {
  return useQuery({
    queryKey: ["all-promotion"],
    queryFn: () => getPromotions({ token }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

// ADD Promotion
export const useAddPromotion = () => {
  const queryClient = useQueryClient();

  return useMutation(addPromotion, {
    onSuccess: () => {
      toast.success("added Promotion successfully!");
      queryClient.refetchQueries(["Owndrugs"]);
      queryClient.invalidateQueries(["statisticsInventory"]);
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
      queryClient.invalidateQueries(["statisticsInventory"]);
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
