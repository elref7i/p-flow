import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { columns } from './data';
import toast from 'react-hot-toast';
import { useTypeContext } from '../../../context/UserType.context';

const fetchUsers = async () => {
  const { data } = await axios.get(
    'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users'
  );
  return data.users;
};
const deleteUser = async ({ userId, token }) => {
  const options = {
    url: `https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users/${userId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.request(options);
};
export default function Users() {
  const queryClient = useQueryClient();
  const { token } = useTypeContext();
  console.log(token);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      toast.success('User deleted successfully');
      queryClient.invalidateQueries(['users']); // إعادة جلب البيانات بعد الحذف
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete user');
    },
  });

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];

  const columnsWithDelete = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={() => mutation.mutate(params.row._id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Paper elevation={8} sx={{ height: 550, width: '100%', overflowX: 'auto' }}>
      <DataGrid
        rows={filteredData}
        columns={columnsWithDelete}
        getRowId={(row) => row._id}
        loading={isLoading}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize
        slots={{ toolbar: GridToolbar }}
      />
    </Paper>
  );
}
