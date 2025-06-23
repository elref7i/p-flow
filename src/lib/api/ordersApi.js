import axios from "axios";
import { API_URL_ORDERS } from "./api_url";

// * Get My Orders
export const getMyOrders = async (token) => {
  const options = {
    url: `${API_URL_ORDERS}/my-orders`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await axios.request(options);
  return data.data;
};

// * create Order
export const createOrder = async ({ token, cartId, inventoryId }) => {
  const options = {
    url: `${API_URL_ORDERS}/cart/${cartId}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      inventoryId,
    },
  };
  return axios.request(options);
};

//* Cancel Order
export const CancelOrder = async ({ token, orderId }) => {
  const options = {
    url: `${API_URL_ORDERS}/${orderId}/cancel`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      reason: "Order no longer needed",
    },
  };
  return axios.request(options);
};

//* Get Specific Order
export const getSpecificOrder = async ({ token, orderId }) => {
  const options = {
    url: `${API_URL_ORDERS}/${orderId}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await axios.request(options);
  return data.data;
};

// * Reject Order
export const rejectOrder = async ({ token, orderId }) => {
  const options = {
    url: `${API_URL_ORDERS}/${orderId}/reject`,
    method: "PATCH",
    data: {
      reason: "Order not allowed",
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// *  Order Status
export const statusOrder = async ({ token, orderId, values }) => {
  const options = {
    url: `${API_URL_ORDERS}/${orderId}/status`,
    method: "PATCH",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};
