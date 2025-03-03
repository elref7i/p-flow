import toast from 'react-hot-toast';
import { updateLoggedUserData } from '../api/userAPI';
import { useMutation } from '@tanstack/react-query';

export const useUpdateLoggedUser = () => {
  return useMutation(updateLoggedUserData, {
    onSuccess: () => {
      toast.success('success');
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.log(error);
    },
  });
};
