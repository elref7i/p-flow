/* eslint-disable react/prop-types */
"use client";

// import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Card, Typography } from "@mui/material";

import ModalAdd from "../AdminComonents/ModalAdd/ModalAdd";
import { useThemeConstants } from "../../lib/constants/theme.constant";

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

export default function AdminTable({
  isLoading,
  data,
  columnsWithActions,
  check,
}) {
  //Temes

  const {
    tableRowHover,
    tableBorder,
    tableText,
    shadow1,
    shadow2,
    shadow3,
    typography,
  } = useThemeConstants();
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        p: 2,
        borderRadius: 2,
        boxShadow: shadow1,
      }}
    >
      {/* Top action buttons */}
      {check && (
        <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
          <ModalAdd />
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
                borderRadius: 3,
                boxShadow: shadow2,
                border: tableBorder,
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
      <Box sx={{ height: !check ? 600 : 650, width: "100%" }}>
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
            boxShadow: shadow3,
            p: 2,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "tableHeader",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid '${tableBorder} '`,
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: tableRowHover,
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: typography.h1.fontWeight,
            },
            "& .MuiCheckbox-root": {
              color: tableText,
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
          color: tableText,
        }}
      >
        <Typography variant="body2">Showing 1-9 of 240 entries</Typography>
      </Box>
    </Box>
  );
}
