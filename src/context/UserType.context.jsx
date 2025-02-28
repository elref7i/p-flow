/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getSpecificUser } from '../api/adminApi';
export const UserTypeContext = createContext(0);
import { jwtDecode } from 'jwt-decode';
export default function UserTypeProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [token, setToken] = useState(localStorage.getItem('token'));

  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );
  console.log(userData);

  useEffect(() => {
    setRole(localStorage.getItem('role'));
    setToken(localStorage.getItem('token'));
  }, []);

  const fetchUserData = async (userId, token) => {
    try {
      const data = await getSpecificUser({ userId, token });
      setUserData(data);
      // console.log(data);

      localStorage.setItem('userData', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };
  async function login(values) {
    const loading = toast.loading('Waiting...');
    try {
      const { data } = await axios.post(
        'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/login',
        values,
        { withCredentials: true }
      );
      if (data.message === 'success') {
        toast.success('Login successful!');
        setRole(data.user.role);
        setToken(data.token);
        const decodeToken = jwtDecode(data.token);
        // console.log(decodeToken);
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        fetchUserData(decodeToken.userId, data.token);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Login failed!');
    } finally {
      toast.dismiss(loading);
    }
  }

  function logout() {
    setRole(null);
    setToken(null);
    setUserData(null);
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userData');
    toast.success('Logged out successfully!');
  }

  return (
    <UserTypeContext.Provider
      // @ts-ignore
      value={{ token, role, logout, login, userData, setUserData }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}

export function useTypeContext() {
  return useContext(UserTypeContext);
}
