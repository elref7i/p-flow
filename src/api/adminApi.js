import axios from 'axios';
const API_URL = 'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users';

//* GET ALL Users

export const fetchUsers = async () => {
  const { data } = await axios.get(API_URL);
  return data.users;
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
  try {
    const options = {
      url: `${API_URL}/${userId}`,
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

// export const UpdateAdminPassUser = async ({ userId, values }) => {
//   const options = {
//     url: `${API_URL}/${userId}`,
//     method: 'PATCH',
//     data: values,
//   };
//   return axios.request(options);
// };
