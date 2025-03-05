import { Avatar, Box } from '@mui/material';
import { columns } from './data';
import { useAllUsers } from '@/lib/hooks/useAdminAction';
import Table from '../../../components/AdminComonents/Table/Table';

export default function Users() {
  const { data, isLoading } = useAllUsers();

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];

  const PrfileImage = {
    field: 'profileImage',
    headerName: 'PrfileImage',
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
          <Avatar alt="Remy Sharp" src={params.row.profileImage} />
        </Box>
      );
    },
  };

  const columnsWithActions = [PrfileImage, ...columns];

  return (
    <Table
      isLoading={isLoading}
      filteredData={filteredData}
      columnsWithActions={columnsWithActions}
      check={false}
    />
  );
}
