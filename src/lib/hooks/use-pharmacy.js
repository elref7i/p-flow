import { useQuery } from "@tanstack/react-query";
import { getAllInventoires } from "../api/pharmacy_api";

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

// Update
