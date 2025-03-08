import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addDrug, deleteDrug, getAllDrugs, updateDrug } from '../api/drugApi';
import toast from 'react-hot-toast';

//* get all Drugs

export const useAllDrugs = () => {
  return useQuery({
    queryKey: ['drugs'],
    queryFn: getAllDrugs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

//* Add Drug

export const useAddDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(addDrug, {
    onSuccess: () => {
      toast.success('Drug added successfully');
      queryClient.invalidateQueries(['drugs']);
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.log(error);
    },
  });
};

// * Delete Drug

export const useDeleteDrug = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDrug, {
    onSuccess: () => {
      toast.success('Drug deleted successfully');
      queryClient.invalidateQueries(['drugs']);
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.log(error);
    },
  });
};

// * Update Drug

export const useUpdateDrug = () => {
  const queryClient = useQueryClient();
  return useMutation(updateDrug, {
    onSuccess: () => {
      toast.success('success');
      queryClient.invalidateQueries(['drugs']);
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.log(error);
    },
  });
};

//* GET ALL Drugs

export const useAllDrugs = () => {
  return useQuery({
    queryKey: ['drugs'],
    queryFn: fetchDrugs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
