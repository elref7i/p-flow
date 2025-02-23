import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser, updateUserData } from '../api/adminApi';
import toast from 'react-hot-toast';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserData, {
    onSuccess: () => {
      toast.success('success');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(error.response.data.message || 'error');
      console.log(error);
    },
  });
};
