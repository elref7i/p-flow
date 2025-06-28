import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  addDrug,
  addDrugFromExcel,
  deleteDrug,
  getAllDrugs,
  getAllOwnDrugs,
  getDrugsspecificInventory,
  getSpecificDrug,
  updateDrug,
} from "../api/drugApi";

//* ============================ Get All Drugs ============================

export const useInfiniteDrugs = (token, params = {}) => {
  return useInfiniteQuery({
    queryKey: ["infinite-drugs", params],
    queryFn: ({ pageParam = 1 }) =>
      getAllDrugs(token, { ...params, page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.paginationResult?.next || undefined,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

//* ============================ Get Specific Drug ============================

export const useSpecificDrug = ({ token, drugId }) => {
  return useQuery({
    queryKey: ["SpecificDrug", drugId],
    queryFn: () => getSpecificDrug({ token, drugId }),
    cacheTime: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

//* ============================ Add Drug ============================

export const useAddDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(addDrug, {
    onSuccess: () => {
      toast.success("Drug added successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.error(error);
    },
  });
};

//* ============================ Add Drug From Excel ============================

export const useAddDrugExcel = () => {
  const queryClient = useQueryClient();

  return useMutation(addDrugFromExcel, {
    onSuccess: () => {
      toast.success("Drug added successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.error(error);
    },
  });
};

//* ============================ Delete Drug ============================

export const useDeleteDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDrug, {
    onSuccess: () => {
      toast.success("Drug deleted successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.error(error);
    },
  });
};

//* ============================ Update Drug ============================

export const useUpdateDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(updateDrug, {
    onSuccess: () => {
      toast.success("Drug Updated successfully");
      queryClient.invalidateQueries(["Owndrugs"]);
    },
    onError: (error) => {
      toast.error(error.response.data.message || "error");
      console.error(error);
    },
  });
};

//* ============================ Get All Own Drugs ============================

export const useOwnDrugs = (token, params = {}) => {
  return useQuery({
    queryKey: ["Owndrugs", "normal", params],
    queryFn: () => getAllOwnDrugs(token, params),
    enabled: !!token,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export const useInfiniteOwnDrugs = (token, params = {}) => {
  return useInfiniteQuery({
    queryKey: ["Owndrugs", "infinite", params],
    queryFn: ({ pageParam = 1 }) =>
      getAllOwnDrugs(token, { ...params, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.pagination?.next || undefined,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

//* ============================ Drugs in Specific Inventory ============================

export const useDrugsSpecificInventory = (inventoryId, params = {}) => {
  return useQuery({
    queryKey: ["drugsSpecificInventory", "normal", inventoryId, params],
    queryFn: () => getDrugsspecificInventory(inventoryId, params),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export const useInfiniteDrugsSpecificInventory = (inventoryId, params = {}) => {
  return useInfiniteQuery({
    queryKey: ["drugsSpecificInventory", "infinite", inventoryId, params],
    queryFn: ({ pageParam = 1 }) =>
      getDrugsspecificInventory(inventoryId, { ...params, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.pagination?.next || undefined,
    keepPreviousData: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};
