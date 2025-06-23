// Search AI

import axios from "axios";
import { API_URL_DRUG } from "./api_url";

export const searchAI = async ({ token, values }) => {
  const options = {
    url: `${API_URL_DRUG}/getAlternatives`,
    method: "POST",
    data: values,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};

// Prescription AI
export const addPrescriptionAI = async ({ formData }) => {
  const options = {
    url: `${API_URL_DRUG}/getAlternatives`,
    method: "POST",
    data: formData,
  };
  return axios.request(options);
};
