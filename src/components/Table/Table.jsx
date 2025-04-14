/* eslint-disable react/prop-types */
import { Paper, Stack, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import ModalAdd from "../AdminComonents/ModalAdd/ModalAdd";
import AddDrugComponent from "../InventoryComponents/AddDrugComponent/AddDrugComponent";
import AddDrugFromExcel from "../InventoryComponents/AddDrugFromExcel/AddDrugFromExcel";

export default function Table({
  isLoading,
  data,
  columnsWithActions,
  check,
  checkTable,
}) {
  const theme = useTheme();

  return (
    <>
      <Paper
        elevation={8}
        sx={{
          minHeight: 550,
          p: 2,
          overflowX: "auto",
          width: check ? { lg: "fit-content" } : "auto",
          mx: "auto",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {check && (
          <Stack
            direction={"row"}
            justifyContent={"end"}
            component={"div"}
            gap={!checkTable && 2}
            mb={2}
          >
            {checkTable ? (
              // Admin
              <ModalAdd />
            ) : (
              //  Inventory
              <>
                <AddDrugComponent />
                <AddDrugFromExcel />
              </>
            )}
          </Stack>
        )}
        <DataGrid
          rows={data}
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
            minHeight: check ? 460 : 550,
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${theme.palette.divider}`, // لون حدود الخلايا
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.navbar, // لون خلفية رأس الأعمدة
              color: theme.palette.text.primary, // لون نص رأس الأعمدة
              borderBottom: `1px solid ${theme.palette.divider}`, // لون حدود رأس الأعمدة
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.navbar, // لون خلفية التذييل
              color: theme.palette.text.primary, // لون نص التذييل
              borderTop: `1px solid ${theme.palette.divider}`, // لون حدود التذييل
            },
            // تخصيص لون الـ checkbox
            "& .MuiCheckbox-root": {
              color: theme.palette.grey[400], // لون الـ checkbox العادي
              "&.Mui-checked": {
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
                "& .MuiButton-root": {
                  color: theme.palette.action.active, // لون نص الأزرار
                  "&:hover": {
                    backgroundColor: theme.palette.action.selected, // لون خلفية الأزرار عند الـ hover
                  },
                },
              },
            },
          }}
        />
      </Paper>
    </>
  );
}
