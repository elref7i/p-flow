import axios from 'axios';
const API_URL = 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users';
export const fetchUsers = async () => {
  const { data } = await axios.get(API_URL);
  return data.users;
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

export const getSpecificUser = async ({ token, userId }) => {
  try {
    const options = {
      url: `https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users/${userId}`,
      method: 'GET',
      headers: {
        Authorization: {
          token: `Bearer ${token}`,
        },
      },
    };
    const { data } = await axios.request(options);
    return data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
