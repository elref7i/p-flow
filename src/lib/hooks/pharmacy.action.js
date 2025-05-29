import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllInventoires, searchAI } from "../api/pharmacy_api";
import toast from "react-hot-toast";

export const useGetAllInventoriesQuery = ({ token, params = {} }) => {
  return useQuery({
    queryKey: ["inventories", params],
    queryFn: () => getAllInventoires({ token, params }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });
};

// use Search AI
export const useSearchAI = () => {
  // const queryClient = useQueryClient();

  return useMutation(searchAI, {
    onSuccess: () => {
      toast.success("added Promotion successfully!");
      // queryClient.refetchQueries(["Owndrugs"]);
      // queryClient.invalidateQueries(["statisticsInventory"]);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed Search using AI. Please try again later. "
      );
      console.error(error);
    },
  });
};

// Update
