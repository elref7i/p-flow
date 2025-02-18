/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const UserTypeContext = createContext(0);

export default function UserTypeProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(null);
  async function login(values) {
    const loading = toast.loading("watting");
    try {
      const options = {
        url: "https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/auth/login",
        method: "POST",
        data: values,
      };
      const { data } = await axios.request(options);

      if (data.message === "success") {
        console.log(data);
        toast.success(data.message);
        setRole(data.user.role);
        setToken(data.token);
        setUserData(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        navigator("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(loading);
    }
  }

  function logout() {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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
