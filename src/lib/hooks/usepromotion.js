import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  addPromotion,
  getPromotions,
  updatePromotion,
} from "../api/promotion_api";
import toast from "react-hot-toast";

export const useInfinitePromotions = (token, params = {}) => {
  return useInfiniteQuery({
    queryKey: ["infinite-drugs", params],
    queryFn: ({ pageParam = 1 }) =>
      getPromotions(token, { ...params, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.pagination?.next || undefined,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
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
