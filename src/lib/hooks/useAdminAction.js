import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  ActiveAdminUser,
  addAdminUser,
  deleteUser,
  fetchUsers,
  updateUserData,
} from '../api/adminApi';
import toast from 'react-hot-toast';

//* GET ALL USERS
export const useAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

//*ADD USER
export const useAdminAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation(addAdminUser, {
    onSuccess: () => {
      toast.success('User added successfully!');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          'Failed to add user. Please try again later. '
      );
      console.error(error);
    },
  });
};

//* Active User
export const useActiveAdminUser = () => {
  const queryClient = useQueryClient();
  return useMutation(ActiveAdminUser, {
    onSuccess: () => {
      toast.success('The account has been activated successfully!');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          'Failed to activate the account. Please try again later.'
      );
      console.error(error);
    },
  });
};

//* DELETE USER
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      toast.success('User deleted successfully!');

      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          'Failed to delete user. Please try again later.'
      );
      console.log(error);
    },
  });
};

//* UPDATE USER
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserData, {
    onSuccess: () => {
      toast.success('User updated successfully!');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          'Failed to update user. Please try again later.'
      );
      console.log(error);
    },
  });
};
