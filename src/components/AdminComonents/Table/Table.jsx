/* eslint-disable react/prop-types */
import { Paper, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Table({
  isLoading,
  filteredData,
  columnsWithActions,
  check,
}) {
  const theme = useTheme();

  return (
    <Paper
      elevation={8}
      sx={{
        height: 550,
        overflow: 'auto',
        width: check ? { lg: 'fit-content' } : 'auto',
        mx: 'auto',
        backgroundColor: theme.palette.background.paper, // لون خلفية الورق
      }}
    >
      <DataGrid
        rows={filteredData}
        columns={columnsWithActions}
        getRowId={(row) => row._id}
        loading={isLoading}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize
        slots={{ toolbar: GridToolbar }}
        sx={{
          backgroundColor: theme.palette.background.default, // لون خلفية الـ DataGrid
          color: theme.palette.text.primary, // لون النصوص
          borderColor: theme.palette.divider,
          mx: 'auto',
          '& .MuiDataGrid-cell': {
            borderBottom: `1px solid ${theme.palette.divider}`, // لون حدود الخلايا
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.navbar, // لون خلفية رأس الأعمدة
            color: theme.palette.text.primary, // لون نص رأس الأعمدة
            borderBottom: `1px solid ${theme.palette.divider}`, // لون حدود رأس الأعمدة
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.navbar, // لون خلفية التذييل
            color: theme.palette.text.primary, // لون نص التذييل
            borderTop: `1px solid ${theme.palette.divider}`, // لون حدود التذييل
          },
          // تخصيص لون الـ checkbox
          '& .MuiCheckbox-root': {
            color: theme.palette.grey[400], // لون الـ checkbox العادي
            '&.Mui-checked': {
              color: theme.palette.error.main, // لون الـ checkbox عند التحديد (أحمر)
            },
          },
        }}
        slotProps={{
          toolbar: {
            sx: {
              backgroundColor: theme.palette.background.navbar, // لون خلفية الـ GridToolbar
              color: theme.palette.text.primary, // لون النصوص
              borderBottom: `1px solid ${theme.palette.divider}`, // لون الحدود السفلية
              '& .MuiButton-root': {
                color: theme.palette.action.active, // لون نص الأزرار
                '&:hover': {
                  backgroundColor: theme.palette.action.selected, // لون خلفية الأزرار عند الـ hover
                },
              },
            },
          },
        }}
      />
    </Paper>
  );
}
