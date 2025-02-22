import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { columns } from './data';
import { useTypeContext } from '../../../context/UserType.context';
import AlertModal from '../../../components/AlertDelete/AlertDelete';
import { useDeleteUser } from '../../../hooks/useAdminAction';

const fetchUsers = async () => {
  const { data } = await axios.get(
    'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users'
  );
  return data.users;
};

export default function Users() {
  const { token } = useTypeContext();

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    refetchOnMount: false,
  });

  const {
    isLoading: isDeleting,
    isSuccess: isDeleted,
    error: deleteError,
    mutate: handleDelete,
  } = useDeleteUser();

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];

  const columnsWithDelete = [
    ...columns,
    {
      field: 'actions',
      headerName: 'Actions',
      align: 'center',
      headerAlign: 'center',
      minWidth: 150,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              px: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertModal
              isDeleting={isDeleting}
              isDeleted={isDeleted}
              deleteError={deleteError}
              handleDelete={() =>
                handleDelete({ userId: params.row._id, token })
              }
            />
          </Box>
        );
      },
    },
  ];

  return (
    <Paper elevation={8} sx={{ height: 550, overflowX: 'auto' }}>
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
