import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addDrug, deleteDrug, getAllDrugs, updateDrug } from '../api/drugApi';
import toast from 'react-hot-toast';

//* Get all Drugs

export const useDrugs = (token, params = {}) => {
  // const { search, ...restParams } = params;
  return useQuery({
    queryKey: ['drugs', params],
    queryFn: () => getAllDrugs(token, params),
    refetchOnMount: false,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    cacheTime: 1 * 60 * 1000,
  });
};

//*Add Drug
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
