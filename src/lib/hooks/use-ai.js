import { useMutation } from "@tanstack/react-query";
import { addPrescriptionAI, searchAI } from "../api/ai.api";
import toast from "react-hot-toast";

// use Search AI
export const useSearchAI = () => {
  return useMutation(searchAI, {
    onSuccess: (data) => {
      toast.success(data.message || "success");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed Search using AI. Please try again later. "
      );
      console.error(error);
    },
  });
};

// use Prescription AI
export const usePrescriptionAI = () => {
  return useMutation(addPrescriptionAI, {
    onSuccess: (data) => {
      toast.success(data.message || "Prescription analyzed successfully");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Failed Search using AI. Please try again later. "
      );
      console.error(error);
    },
  });
};
