/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getloggedUserData } from "@/lib/api/userAPI";
import { useQueryClient } from "@tanstack/react-query";
import { API_URL } from "@/lib/api/api_url";

export const UserTypeContext = createContext(0);

export default function UserTypeProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const queryClient = useQueryClient();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setToken(localStorage.getItem("token"));
  }, []);

  const fetchUserData = async (token) => {
    try {
      const data = await getloggedUserData({ token });
      console.log(data);

      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };
  async function login(values) {
    const loading = toast.loading("Waiting...");
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, values, {
        withCredentials: true,
      });
      if (data.message === "success") {
        toast.success("Login successful!");
        setRole(data.user.role);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        fetchUserData(data.token);
        queryClient.invalidateQueries(["ownDrugs"]);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      toast.dismiss(loading);
    }
  }

  function logout() {
    setRole(null);
    setToken(null);
    setUserData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userData");
    toast.success("Logged out successfully!");
    queryClient.removeQueries();
  }

  return (
    <UserTypeContext.Provider
      // @ts-ignore
      value={{ token, role, logout, login, userData, fetchUserData }}
    >
      {children}
    </UserTypeContext.Provider>
  );
}

export function useTypeContext() {
  return useContext(UserTypeContext);
}
