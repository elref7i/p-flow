import axios from "axios";
import { API_URL_DRUG, API_URL_USER } from "./api_url";

//* GET ALL Inventories
export const getAllInventoires = async ({ token, params = {} }) => {
  const options = {
    url: `${API_URL_USER}/inventories`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };

  const data = await axios.request(options);
  return data.data;
};

// Search AI

export const searchAI = async ({ token, values }) => {
  const options = {
    url: `${API_URL_DRUG}/getAlternatives`,
    method: "POST",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};
