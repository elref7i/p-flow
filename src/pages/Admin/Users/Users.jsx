import { Avatar, Box } from '@mui/material';
import { columns } from './Allusers';
import Table from '../../../components/Table/Table';
import { useAllUsers } from '../../../lib/hooks/useAdminAction';

export default function Users() {
  const { data, isLoading } = useAllUsers();

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];

  console.log(filteredData);
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
            pt: 1,
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
      data={filteredData}
      columnsWithActions={columnsWithActions}
      check={false}
    />
  );
}
