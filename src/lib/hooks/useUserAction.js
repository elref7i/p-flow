import toast from "react-hot-toast";
import { updateLoggedUserData, updateLoggedUserPass } from "../api/userAPI";
import { useMutation } from "@tanstack/react-query";
import { useTypeContext } from "../../context/UserType.context";

export const useUpdateLoggedUser = () => {
  return useMutation(updateLoggedUserData, {
    onSuccess: () => {
      toast.success("success");
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.error(error);
    },
  });
};
export const useUpdatePassUSer = () => {
  const { logout } = useTypeContext();
  return useMutation(updateLoggedUserPass, {
    onSuccess: () => {
      toast.success("success update password");
      setTimeout(() => {
        logout();
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.error(error);
    },
  });
};
