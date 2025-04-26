import axios from "axios";
import toast from "react-hot-toast";
import { API } from "./api_url";

export const signup = async (values) => {
  const toastloading = toast.loading("Waiting...");
  try {
    const options = {
      url: `${API}/auth/signup`,
      method: "POST",
      data: values,
    };
    const { data } = await axios.request(options);
    if (data.message === "success") {
      if (data.message === "success") {
        toast.success(data.message);
      }
      console.log("Response:", data);
      console.log("Response:", data);
    }
  } catch (error) {
    toast.error(error.response.data.message);
    console.error("Error:", error);
    console.error("Error:", error);
  } finally {
    toast.dismiss(toastloading);
  }
};
