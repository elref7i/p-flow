/* eslint-disable react/prop-types */

// import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, Pagination, Typography } from "@mui/material";

import { useThemeConstants } from "../../lib/constants/theme.constant";
import { usePaginationTable } from "../../context/Pagination.context";

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
  paginationAbout,
}) {
  const { setParams } = usePaginationTable();
  const paginationData = paginationAbout || {};
  const totalPages = paginationData.numberOfPages || 1;
  const currentPage = paginationData.currentPage || 1;
  const limitDrug = paginationData.limit || 1;
  const totalDocuments = paginationData.totalDocuments || 0;
  console.log(data);

  console.log("paginationData", paginationData);
  console.log("totalPages", totalPages);
  console.log("currentPage", currentPage);
  console.log("limitDrug", limitDrug);
  console.log("totalDocuments", totalDocuments);

  const handlePageChange = (event, newPage) => {
    console.log("Changing page to:", newPage);
    setParams({ page: newPage, limit: limitDrug });
  };

  const {
    tableRowHover,
    tableBorder,
    tableText,
    shadow2,
    shadow3,
    typography,
  } = useThemeConstants();
  return (
    <>
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
      <Box sx={{ height: !check ? 700 : 650, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columnsWithActions}
          getRowId={(row) => row._id}
          loading={isLoading}
          hideFooterPagination={true}
          hideFooter={true}
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
          // slots={{
          //   toolbar: GridToolbar,
          // }}
          // slotProps={{
          //   toolbar: {
          //     showQuickFilter: true,
          //   },
          // }}
        />
      </Box>

      {/* Pagination info */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        {/* <Typography variant="body2">
          Showing {(currentPage - 1) * limit + 1}-
          {Math.min(currentPage * limit, totalDocuments)} of {totalDocuments}{" "}
          entries
        </Typography> */}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>
    </>
  );
}
