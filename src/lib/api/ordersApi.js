import axios from "axios";
import { API_URL_ORDERS } from "./api_url";

// * get All Own Drugs
export const getAllOwnDrugs = async (token) => {
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
