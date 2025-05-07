import axios from "axios";
import { API_URL_ORDERS } from "./api_url";

// // * get All Own Drugs
// export const getAllOwnDrugs = async (token) => {
//   const options = {
//     url: `${API_URL_ORDERS}/my-orders`,
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const data = await axios.request(options);
//   return data.data;
// };

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
