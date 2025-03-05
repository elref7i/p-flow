import { Box } from '@mui/material';
import { columns } from './data';
import { useTypeContext } from '@/context/UserType.context';
import { useAllUsers, useDeleteUser } from '@/lib/hooks/useAdminAction';
import AlertModal from '@/components/AdminComonents/MessageAlert/MessageAlert';
import ModalUpdated from '@/components/AdminComonents/ModalUpdated/ModalUpdated';
import Table from '../../../components/AdminComonents/Table/Table';

export default function UsersAction() {
  const { token } = useTypeContext();

  const { data, isLoading } = useAllUsers();

  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteUser();

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
  // const PrfileImage = {
  //   field: 'profileImage',
  //   headerName: 'PrfileImage',
  //   align: 'center',
  //   headerAlign: 'center',
  //   minWidth: 150,
  //   renderCell: (params) => {
  //     return (
  //       <Box
  //         sx={{
  //           px: 5,
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         <Avatar alt="Remy Sharp" src={params.row.profileImage} />
  //       </Box>
  //     );
  //   },
  // };

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
    <Table
      isLoading={isLoading}
      filteredData={filteredData}
      columnsWithActions={columnsWithActions}
      check={true}
    />
  );
}
