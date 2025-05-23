import axios from "axios";
import { API_URL_CAT, API_URL_USER } from "./api_url";

//* GET ALL Users

export const fetchUsers = async () => {
  const { data } = await axios.get(API_URL_USER);
  console.log(data.data);

  return data.data;
};

//* Add User
export const addAdminUser = async ({ token, values }) => {
  const options = {
    url: `${API_URL_USER}`,
    method: "POST",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

//* Active User
export const ActiveAdminUser = async ({ token, userId }) => {
  const options = {
    url: `${API_URL_USER}/activate/${userId}`,
    method: "POST",
    data: {
      active: true,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

//* Delete User
export const deleteUser = async ({ userId, token }) => {
  const options = {
    url: `${API_URL_USER}/${userId}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

//*Update User
export const updateUserData = async ({ userId, token, values }) => {
  const options = {
    url: `${API_URL_USER}/${userId}`,
    method: "PUT",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

//* Hints delete Try And Catch
export const getSpecificUser = async ({ token, userId }) => {
  const options = {
    url: `${API_URL_USER}/${userId}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.request(options);
  return data.user;
};

// Get Categories
export const getCategories = async () => {
  const { data } = await axios.get(`${API_URL_CAT}`);
  return data;
};

// Get Specific Category
export const getSpecificCategory = async ({ id }) => {
  const options = {
    url: `${API_URL_CAT}/${id}`,
    method: "GET",
  };

  const { data } = await axios.request(options);

  return data;
};

// Add Category
export const addCategory = async ({ token, formData }) => {
  const options = {
    url: `${API_URL_CAT}`,
    method: "POST",
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// Update Category
export const updateCategory = async ({ token, id, formData }) => {
  const options = {
    url: `${API_URL_CAT}/${id}`,
    method: "PUT",
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// Delete Category
export const deleteCategory = async ({ token, id }) => {
  const options = {
    url: `${API_URL_CAT}/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// ^ get Admin statistics
export const getAdminStatistics = async ({ token }) => {
  const options = {
    url: `${API_URL_USER}/statisticsAdmin`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await axios.request(options);
  return data.data;
};
