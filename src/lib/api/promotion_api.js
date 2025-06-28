import axios from "axios";
import { API_URL_DRUG } from "./api_url";

export const getPromotions = async (token, params = {}) => {
  const options = {
    url: `${API_URL_DRUG}/promotion`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  const { data } = await axios.request(options);

  return data;
};

//Add User
export const addPromotion = async ({ token, values }) => {
  const options = {
    url: `${API_URL_DRUG}/promotion`,
    method: "POST",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// Update promotion
export const updatePromotion = async ({ token, values, drugId }) => {
  const options = {
    url: `${API_URL_DRUG}/promotion/${drugId}`,
    method: "PATCH",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// get specific Promotion
export const getSpecificPromotion = async (inventoryId, params = {}) => {
  const options = {
    url: `${API_URL_DRUG}/promotion/${inventoryId}`,
    method: "GET",
    params,
  };
  const { data } = await axios.request(options);
  return data;
};
