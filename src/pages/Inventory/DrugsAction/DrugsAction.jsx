import { Box, TextField } from "@mui/material";
import { useTypeContext } from "@/context/UserType.context";
import { columns } from "./data";
import { useDeleteDrug, useOwnDrugs } from "../../../lib/hooks/useDrugAction";
import UpdateModal from "../../../components/InventoryComponents/UpdateModal/UpdateModal";
import DeleteModal from "../../../components/InventoryComponents/DeleteModal/DeleteModal";
import { Helmet } from "react-helmet";
import TableData from "../../../components/TableData/TableData";
import { usePaginationTable } from "../../../context/Pagination.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function DrugsAction() {
  //State
  const { params } = usePaginationTable();
  // const { setPaginationData } = usePaginationTable();

  //Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useOwnDrugs(token, params);
  const { shadow1, shadow2, background } = useThemeConstants();
  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteDrug();

  const DeletedColumn = {
    field: "deleted",
    headerName: "Delete",
    align: "center",
    headerAlign: "center",
    minWidth: 150,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            px: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DeleteModal
            isDeleting={isDeleting}
            handleAction={() => handleDelete({ drugId: params.row._id, token })}
          />
        </Box>
      );
    },
  };

  const updatedColumn = {
    field: "updated",
    headerName: "Update",
    align: "center",
    headerAlign: "center",
    minWidth: 150,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            px: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UpdateModal drugId={params.row._id} />
        </Box>
      );
    },
  };

  const columnsWithActions = [...columns, DeletedColumn, updatedColumn];

  return (
    <>
      <Helmet>
        <title>Drugs Action</title>
        <meta
          name="description"
          content="Manage your drug inventory with actions like updating and deleting drugs."
        />
        <meta
          name="keywords"
          content="drugs, inventory management, pharmacy, medicine, update drugs, delete drugs"
        />
        <meta
          property="og:title"
          content="Manage Drugs - Pharmacy Inventory"
        />
        <meta
          property="og:description"
          content="Easily update or delete drugs from your inventory with a user-friendly interface."
        />
        <meta
          property="og:type"
          content="website"
        />
      </Helmet>
      <Box
        sx={{
          bgcolor: "transparent",
          p: 2,
          borderRadius: 2,
          boxShadow: shadow1,
        }}
      >
        <Box sx={{ mb: 3, mt: 2, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", flex: 1 }}>
              <TextField
                fullWidth
                placeholder="Search drugs..."
                variant="filled"
                type="search"
                sx={{
                  borderRadius: "10px",
                  boxShadow: shadow2,
                  overflow: "hidden",
                  background: background,
                  "& input::placeholder": {
                    fontSize: "18px",
                    fontWeight: "bold",
                  },
                }}
                // onChange={(e) => {
                //   handleSearch(e.target.value);
                // }}
                InputProps={{
                  endAdornment: (
                    <Box
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                      // onClick={handleOpenFilter}
                    >
                      {/* <FilterListIcon color="action" /> */}
                    </Box>
                  ),
                }}
              />
            </Box>
            {/* <Filter
          openFilter={openFilter}
          handleCloseFilter={handleCloseFilter}
          handleOpenFilter={handleOpenFilter}
          setParams={setParams}
        /> */}
          </Box>
        </Box>
        {/* Table */}
        <TableData
          isLoading={isLoading}
          data={data && data.data.drugs}
          columnsWithActions={columnsWithActions}
          check={false}
          checkTable={false}
          paginationAbout={data && data.pagination}
        />
      </Box>
    </>
  );
}
