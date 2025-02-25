import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper, Box } from '@mui/material';
import { columns } from './data';
import { useTypeContext } from '@/context/UserType.context';
import { useAllUsers, useDeleteUser } from '@/hooks/useAdminAction';
import AlertModal from '@/components/AdminComonents/MessagAlert/MessageAlert';
import ModalUpdated from '@/components/AdminComonents/ModalUpdated/ModalUpdated';

export default function Users() {
  const { token } = useTypeContext();

  const { data, isLoading } = useAllUsers();

  const {
    isLoading: isDeleting,
    // isSuccess: isDeleted,
    // error: deleteError,
    mutate: handleDelete,
  } = useDeleteUser();

  // const mutation = useMutation(updatedUser, {
  //   onSuccess: () => {
  //     console.log('succes');
  //   },
  //   onError: () => {
  //     console.log('error');
  //   },
  // });
  // console.log(mutation.data);

  // const handleUpdated = (userId) => {
  //   mutation.mutate({ userId, token });
  // };

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];
  const DeletedColumn = {
    field: 'deleted',
    headerName: 'Deleted',
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
            handleAction={() => handleDelete({ userId: params.row._id, token })}
          />
        </Box>
      );
    },
  };

  const updatedColumn = {
    field: 'updated',
    headerName: 'Updated',
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
          <ModalUpdated userId={params.row._id} />
        </Box>
      );
    },
  };

  const columnsWithActions = [...columns, DeletedColumn, updatedColumn];

  return (
    <Paper elevation={8} sx={{ height: 550, overflowX: 'auto' }}>
      <DataGrid
        rows={filteredData}
        columns={columnsWithActions}
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
