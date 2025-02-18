import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './data';
import { Paper } from '@mui/material';

export default function Users() {
  return (
    <Paper elevation={8} sx={{ height: 550, width: '100%', overflowX: 'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize
        slots={{ toolbar: GridToolbar }}
      />
    </Paper>
  );
}
