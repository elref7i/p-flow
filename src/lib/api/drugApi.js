import axios from 'axios';
import { API_URL_DRUG } from './api_url';

//* Get All Drugs

export const getAllDrugs = async (token, params = {}) => {
  const options = {
    url: API_URL_DRUG,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  const data = await axios.request(options);
  return data.data;
};

// ^ Add Drug
export const addDrug = async ({ token, values }) => {
  const options = {
    url: `${API_URL_DRUG}`,
    method: 'POST',
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// * Delete Drug
export const deleteDrug = async ({ token, drugId }) => {
  const options = {
    url: `${API_URL_DRUG}/${drugId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// & Update Drug
export const updateDrug = async ({ token, values, drugId }) => {
  const options = {
    url: `${API_URL_DRUG}/${drugId}`,
    method: 'PUT',
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// ~ get specific Drug
export const getSpecificDrug = async ({ token, drugId }) => {
  const options = {
    url: `${API_URL_DRUG}/${drugId}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.request(options);
  return data.data;
};


// * get All Own Drugs

export const getAllOwnDrugs = async (token) => {
  const options = {
    url: `${API_URL_DRUG}/owndrugs`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const data = await axios.request(options);
      return data.data;
  }


//*Filtter Drug
