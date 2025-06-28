import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  addDrugToCart,
  clearCart,
  getCart,
  removeDrug,
  removeInventory,
  updateCartItemQuantity,
} from "../api/cartApi";
import {
  UserTypeContext,
  useTypeContext,
} from "../../context/UserType.context";
import { useContext } from "react";

export const useCart = () => {
  const { token } = useTypeContext();
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(token),
  });
};

export const useAddToCart = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ drugId, quantity }) =>
      addDrugToCart({ token, drugId, quantity }),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["cart"]);
    },
    onError: (error) => {
      toast.error("Failed to add drug to cart!");
      console.error(error);
    },
  });
};

export const useRemoveDrug = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ drugId }) => removeDrug({ token, drugId }),
    onSuccess: (data) => {
      toast.success(data.data.message);

      const inventories = data?.data?.data?.inventories ?? [];

      if (inventories.length === 0) {
        queryClient.setQueryData(["cart"], (old) => ({
          ...old,
          data: { ...old.data, inventories: [] },
        }));
      } else {
        queryClient.invalidateQueries(["cart"]);
      }
    },
    onError: () => {
      toast.error("Error removing drug");
    },
  });
};

export const useUpdateCartItem = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ drugId, quantity }) =>
      updateCartItemQuantity({ token, drugId, quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
};

export const useClearCart = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => clearCart(token),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.setQueryData(["cart"], {
        numOfCartItems: 0,
      });
    },
    onError: () => {
      toast.error("Failed to clear cart");
    },
  });
};

export const useRemoveInventory = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ inventoryId }) => removeInventory({ token, inventoryId }),
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["cart"]);
    },
    onError: () => {
      toast.error("Error removing inventory");
    },
  });
};
