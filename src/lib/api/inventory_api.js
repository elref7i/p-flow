import axios from "axios";
import { API_URL_USER } from "./api_url";

export const getStatisticsInventory = async ({ token }) => {
  const options = {
    url: `${API_URL_USER}/statisticsInventory`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.request(options);
  console.log(data);

  return data.data;
};
