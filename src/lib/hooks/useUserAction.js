import toast from 'react-hot-toast';
import { updateLoggedUserData, updateLoggedUserPass } from '../api/userAPI';
import { useMutation } from '@tanstack/react-query';

export const useUpdateLoggedUser = () => {
  return useMutation(updateLoggedUserData, {
    onSuccess: () => {
      toast.success('success');
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.error(error);
    },
  });
};
export const useUpdatePassUSer = () => {
  return useMutation(updateLoggedUserPass, {
    onSuccess: () => {
      toast.success('success update password');
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.error(error);
    },
  });
};
