import axios from "axios";
import toast from "react-hot-toast";

export const signup = async (values) => {
  const toastloading = toast.loading("Waiting...");
  try {
    const options = {
      url: "https://p-flow-v4.onrender.com/api/v1/auth/signup",
      method: "POST",
      data: values,
    };
    const { data } = await axios.request(options);
    if (data.message === "success") {
      toast.success(data.message);
    }
    console.log("Response:", data);
  } catch (error) {
    toast.error(error.response.data.message);
    console.error("Error:", error);
  } finally {
    toast.dismiss(toastloading);
  }
};
// https://pflow-api-v3-1655e5b56c39.herokuapp.com
