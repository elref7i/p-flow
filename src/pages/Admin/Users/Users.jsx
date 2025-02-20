import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { columns } from './data';
const fetchUsers = async () => {
  const { data } = await axios.get(
    'https://pflow-api-v3-1655e5b56c39.herokuapp.com/api/v1/users'
  );
  return data.users;
};

export default function Users() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    // refetchInterval: 5000,
  });
  console.log(data);

  if (isError) {
    return <div>Error: </div>;
  }

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];
  return (
    <Paper elevation={8} sx={{ height: 550, width: '100%', overflowX: 'auto' }}>
      <DataGrid
        rows={filteredData}
        columns={columns}
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
