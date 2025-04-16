/* eslint-disable react/prop-types */
"use client";

// import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Card, Typography } from "@mui/material";

import ModalAdd from "../AdminComonents/ModalAdd/ModalAdd";
import AddDrugComponent from "../InventoryComponents/AddDrugComponent/AddDrugComponent";
import AddDrugFromExcel from "../InventoryComponents/AddDrugFromExcel/AddDrugFromExcel";

// Stats data
const stats = [
  {
    label: "Total Orders This Month",
    value: "200",
    color: "#5E5ADB",
    dotColor: "#5E5ADB",
  },
  {
    label: "Pending Orders",
    value: "20",
    color: "#FF8A00",
    dotColor: "#FF8A00",
  },
  {
    label: "Shipped Orders",
    value: "180",
    color: "#4CAF50",
    dotColor: "#4CAF50",
  },
  {
    label: "Refunded Orders",
    value: "10",
    color: "#F44336",
    dotColor: "#F44336",
  },
];

export default function TableData({
  isLoading,
  data,
  columnsWithActions,
  check,
  checkTable,
}) {
  return (
    <Box sx={{ bgcolor: "transparent", p: 2, borderRadius: 2, boxShadow: 1 }}>
      {/* Top action buttons */}
      {check && (
        <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
          <ModalAdd />
        </Box>
      )}
      {checkTable && (
        <Box sx={{ display: "flex", justifyContent: "end", mb: 2, gap: 1 }}>
          <AddDrugComponent />
          <AddDrugFromExcel />
        </Box>
      )}

      {/* Stats cards */}
      {check && (
        <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
          {stats.map((stat, index) => (
            <Card
              key={index}
              sx={{
                p: 2,
                flex: "1 1 200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: 2,
                boxShadow: "none",
                border: "1px solid #eee",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: stat.dotColor,
                    mr: 1,
                  }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {stat.label}
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: stat.color }}
              >
                {stat.value}
              </Typography>
            </Card>
          ))}
        </Box>
      )}

      {/* DataGrid */}
      <Box sx={{ height: !check ? 600 : 720, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columnsWithActions}
          getRowId={(row) => row._id}
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              // backgroundColor: "#f9f9f9",
            },
            "& .MuiDataGrid-cell": {
              // borderBottom: "1px solid #f0f0f0",
            },
            "& .MuiDataGrid-row:hover": {
              // backgroundColor: "#f5f5f5",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
            },
            "& .MuiCheckbox-root": {
              // color: "#5E5ADB",
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>

      {/* Pagination info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          color: "text.secondary",
        }}
      >
        <Typography variant="body2">Showing 1-9 of 240 entries</Typography>
      </Box>
    </Box>
  );
}
