import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDrug,
  deleteDrug,
  getAllDrugs,
  getAllOwnDrugs,
  getDrugsspecificInventory,
  getSpecificDrug,
  updateDrug,
} from "../api/drugApi";
import toast from "react-hot-toast";

//* Get all Drugs
export const useDrugs = (token, params = {}) => {
  // const { search, ...restParams } = params;
  return useQuery({
    queryKey: ["drugs", params],
    queryFn: () => getAllDrugs(token, params),
    refetchOnMount: false,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    cacheTime: 1 * 60 * 1000,
  });
};

//* get all drugs for specific inventory
export const useDrugsSpecificInventory = ({ drugId }) => {
  return useQuery({
    queryKey: ["drugsSpecificInventory", drugId],
    queryFn: () => getDrugsspecificInventory({ drugId }),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    cacheTime: 1 * 60 * 1000,
  });
};

//*  get specific Drug
export const useSpecificDrug = ({ token, drugId }) => {
  return useQuery({
    queryKey: ["SpecificDrug", drugId],
    queryFn: () => getSpecificDrug({ token, drugId }),
    cacheTime: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

//* Add Drug
export const useAddDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(addDrug, {
    onSuccess: () => {
      toast.success("Drug added successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * Delete Drug
export const useDeleteDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDrug, {
    onSuccess: () => {
      toast.success("Drug deleted successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * Update Drug
export const useUpdateDrug = () => {
  const queryClient = useQueryClient();
  return useMutation(updateDrug, {
    onSuccess: () => {
      toast.success("Drug Updated successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.log(error);
    },
  });
};

// * get All Own Drugs
export const useOwnDrugs = (token) => {
  return useQuery({
    queryKey: ["Owndrugs"],
    queryFn: () => getAllOwnDrugs(token),
    enabled: !!token, // ميشتغلش لو مفيش توكن
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
