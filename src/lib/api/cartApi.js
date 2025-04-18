import axios from "axios";
import { CART_URL } from "./api_url";

export const getCart = async (token) => {
  const options = {
    url: CART_URL,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await axios.request(options);
  return data.data;
};

export const addDrugToCart = async ({ token, drugId, quantity }) => {
  const options = {
    url: `${CART_URL}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      drugId,
      quantity,
    },
  };
  return axios.request(options);
};

export const removeDrug = ({ token, drugId }) => {
  const options = {
    url: `${CART_URL}/drug/${drugId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

export const updateCartItemQuantity = ({ token, drugId, quantity }) => {
  const options = {
    url: `${CART_URL}/drug/${drugId}`,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      quantity,
    },
  };
  return axios.request(options);
};

export const clearCart = (token) => {
  const options = {
    url: `${CART_URL}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

export const removeInventory = ({ token, inventoryId }) => {
  const options = {
    url: `${CART_URL}/inventory/${inventoryId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};
