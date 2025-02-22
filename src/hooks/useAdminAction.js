import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/adminApi';

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
