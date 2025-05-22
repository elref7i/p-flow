import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addInventoryWishllist,
  clearWishllist,
  deleteInventoryWishllist,
  getWishllist,
} from "../api/wishlist_api";
import toast from "react-hot-toast";
import { useTypeContext } from "../../context/UserType.context";

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
    onSuccess: (data) => {
      toast.success(data.message || "Inventory added to wishlist successfully");
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
      toast.success("Inventory deleted from wishlist successfully");
      queryClient.invalidateQueries(["wishlist"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

export const useClearWishlist = () => {
  const queryClient = useQueryClient();
  const { token } = useTypeContext();
  return useMutation({
    mutationFn: () => clearWishllist({ token }),
    onSuccess: (data) => {
      toast.success(data.message || "Wishlist cleared successfully");
      queryClient.invalidateQueries(["wishlist"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};
