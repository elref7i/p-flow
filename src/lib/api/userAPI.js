import axios from "axios";
import { API_URL_USER } from "./api_url";

export const getloggedUserData = async ({ token }) => {
  const options = {
    url: `${API_URL_USER}/getMe`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.request(options);
  return data.user;
};
export const updateLoggedUserData = async ({ token, values }) => {
  const options = {
    url: `${API_URL_USER}/updateMe`,
    method: "PATCH",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.request(options);
};
export const updateLoggedUserPass = async ({ token, values }) => {
  const options = {
    url: `${API_URL_USER}/updateMyPassword`,
    method: "PATCH",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.request(options);
};
