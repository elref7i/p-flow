import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Paper, Box, useTheme } from '@mui/material';
import { columns } from './data';
import { useTypeContext } from '@/context/UserType.context';
import { useAllUsers, useDeleteUser } from '@/lib/hooks/useAdminAction';
import AlertModal from '@/components/AdminComonents/MessagAlert/MessageAlert';
import ModalUpdated from '@/components/AdminComonents/ModalUpdated/ModalUpdated';

export default function Users() {
  const { token } = useTypeContext();
  const theme = useTheme();

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
    <Paper
      elevation={8}
      sx={{
        height: 550,
        overflowX: 'auto',
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
          borderColor: theme.palette.divider, // لون الحدود
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
