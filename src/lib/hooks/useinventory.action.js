import { useQuery } from "@tanstack/react-query";
import { getStatisticsInventory } from "../api/inventory_api";

//* GET ALL USERS
export const useStatisticsInventory = ({ token }) => {
  return useQuery({
    queryKey: ["statisticsInventory"],
    queryFn: () => getStatisticsInventory({ token }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
