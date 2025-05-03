//* GET ALL Users

import axios from "axios";
import { API_URL_USER } from "./api_url";

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
