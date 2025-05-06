import axios from "axios";
import { API_URL_USER } from "./api_url";

export async function getWishllist({ token }) {
  const options = {
    url: `${API_URL_USER}/favourite`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios(options);
  return data;
}
export async function addInventoryWishllist({ token, id }) {
  const options = {
    url: `${API_URL_USER}/favourite/${id}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios(options);
  return data;
}

export async function deleteInventoryWishllist({ token, id }) {
  const options = {
    url: `${API_URL_USER}/favourite/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios(options);
  return data;
}
