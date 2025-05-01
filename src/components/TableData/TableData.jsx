/* eslint-disable react/prop-types */

// import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Pagination } from "@mui/material";

import { useThemeConstants } from "../../lib/constants/theme.constant";
import { useQueryParams } from "../../context/params.context";

export default function TableData({
  isLoading,
  data,
  columnsWithActions,
  paginationAbout,
}) {
  //Context
  const { setSearchParams } = useQueryParams();

  //Variables
  const paginationData = paginationAbout || {};
  const totalPages = paginationData.numberOfPages || 1;
  const currentPage = paginationData.currentPage || 1;
  const limitDrug = paginationData.limit || 1;

  //Functions
  const handlePageChange = (event, newPage) => {
    if (newPage === 1) {
      setSearchParams({});
    } else {
      setSearchParams({ page: newPage, limit: limitDrug });
    }
  };

  const { tableRowHover, tableBorder, tableText, shadow3, typography } =
    useThemeConstants();
  return (
    <>
      {/* DataGrid */}
      <Box
        sx={{
          minHeight: 400,
          maxHeight: 700,
          width: "100%",
          overflow: "auto",
        }}
      >
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
