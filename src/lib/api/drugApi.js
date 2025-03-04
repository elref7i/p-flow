import axios from "axios";
import { API_URL } from "./api_url";

// ^ Add Drug
export const addDrug = async ({ token, values }) => {
  const options = {
    url: `${API_URL}/api/v1/drugs`,
    method: "POST",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// * Delete Drug
export const deleteDrug = async ({ token, drugId }) => {
  const options = {
    url: `${API_URL}/api/v1/drugs/${drugId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// & Update Drug
export const updateDrug = async ({ token, values, drugId }) => {
  const options = {
    url: `${API_URL}/api/v1/drugs/${drugId}`,
    method: "PUT",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// ~ get specific Drug
export const getSpecificDrug = async ({ token, drugId }) => {
  const options = {
    url: `${API_URL}/api/v1/drugs/${drugId}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.request(options);
  return data.drug;
};
