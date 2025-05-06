import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addInventoryWishllist,
  deleteInventoryWishllist,
  getWishllist,
} from "../api/wishlist_api";
import toast from "react-hot-toast";

export const useWishlist = ({ token }) => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishllist({ token }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export const useAddnventoryWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation(addInventoryWishllist, {
    onSuccess: () => {
      toast.success("Inventory Add successfully");
      queryClient.refetchQueries(["wishlist"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};
export const useDeleteInventoryWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteInventoryWishllist, {
    onSuccess: () => {
      toast.success("Inventory deleted successfully");
      queryClient.invalidateQueries(["wishlist"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};
