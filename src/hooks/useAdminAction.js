import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addAdminUser,
  deleteUser,
  fetchUsers,
  updateUserData,
} from '../api/adminApi';
import toast from 'react-hot-toast';

//*ADD USER

export const useAdminAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation(addAdminUser, {
    onSuccess: () => {
      toast.success('User added successfully');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

//* GET ALL USERS
export const useAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

//* DELETE USER
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

//* UPDATE USER
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
