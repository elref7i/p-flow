/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
export const UserTypeContext = createContext(0);

export default function UserTypeProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );
  useEffect(() => {
    setRole(localStorage.getItem('role'));
    setToken(localStorage.getItem('token'));
    setUserData(JSON.parse(localStorage.getItem('userData')));
  }, []);

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
        setUserData(data.user);

        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        localStorage.setItem('userData', JSON.stringify(data.user));
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
    Cookies.remove('token');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userData');
    toast.success('Logged out successfully!');
  }

  return (
    <UserTypeContext.Provider
      // @ts-ignore
      value={{ token, role, logout, login, userData }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}

export function useTypeContext() {
  return useContext(UserTypeContext);
}
