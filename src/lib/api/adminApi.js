import axios from 'axios';
import { API_URL } from './api_url';

//* GET ALL Users

export const fetchUsers = async () => {
  const { data } = await axios.get(API_URL);
  console.log(data.data);

  return data.data;
};
export const addAdminUser = async ({ token, values }) => {
  const options = {
    url: `${API_URL}`,
    method: 'POST',
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};
export const ActiveAdminUser = async ({ token, userId }) => {
  const options = {
    url: `${API_URL}/activate/${userId}`,
    method: 'POST',
    data: {
      active: true,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

export const deleteUser = async ({ userId, token }) => {
  const options = {
    url: `${API_URL}/${userId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};
export const updateUserData = async ({ userId, token, values }) => {
  const options = {
    url: `${API_URL}/${userId}`,
    method: 'PUT',
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
    url: `${API_URL}/${userId}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.request(options);
  return data.user;
};

// export const UpdateAdminPassUser = async ({ userId, values }) => {
//   const options = {
//     url: `${API_URL}${userId}`,
//     method: 'PATCH',
//     data: values,
//   };
//   return axios.request(options);
// };
