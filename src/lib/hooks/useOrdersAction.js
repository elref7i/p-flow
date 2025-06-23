import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import {
  CancelOrder,
  createOrder,
  getMyOrders,
  getSpecificOrder,
  rejectOrder,
  statusOrder,
} from "../api/ordersApi";
import {
  UserTypeContext,
  useTypeContext,
} from "../../context/UserType.context";

// * get orders
export const useOrders = () => {
  const { token } = useTypeContext();
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => getMyOrders(token),
    enabled: !!token,
    staleTime: 0,
  });
};

// ^ Create Order
export const useCreateOrder = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ cartId, inventoryId }) =>
      createOrder({ token, cartId, inventoryId }),
    onSuccess: () => {
      toast.success("Order created successfully");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      toast.error("Error creating order");
      console.log(error);
    },
  });
};

// & Cancel Order
export const useCancelOrder = () => {
  const { token } = useContext(UserTypeContext);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId }) => CancelOrder({ token, orderId }),
    onSuccess: () => {
      toast.success("Order cancelled successfully");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      toast.error("Error cancelling order");
      console.log(error);
    },
  });
};

// ~  Get Specific Order
export const useGetSpecificOrder = (orderId) => {
  const { token } = useContext(UserTypeContext);
  return useQuery({
    queryKey: ["orders", orderId],
    queryFn: () => getSpecificOrder(token),
    enabled: !!token,
  });
};

// ? Reject Order
export const useRejectOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(rejectOrder, {
    onSuccess: () => {
      toast.success("Order rejected successfully");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      toast.error("Error rejecting order");
      console.log(error);
    },
  });
};

//Update Order Status
export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation(statusOrder, {
    onSuccess: () => {
      toast.success("Updated Order Status successfully");
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      toast.error("Error Status order");
      console.log(error);
    },
  });
};
