import { columns } from "./Drugs";
import { useOwnDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import TableData from "../../../components/TableData/TableData";
import { useTypeContext } from "../../../context/UserType.context";
import { usePaginationTable } from "../../../context/Pagination.context";
import { Box, TextField } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import AddDrugComponent from "../../../components/InventoryComponents/AddDrugComponent/AddDrugComponent";
import AddDrugFromExcel from "../../../components/InventoryComponents/AddDrugFromExcel/AddDrugFromExcel";
export default function AllDrugs() {
  //Context
  //States
  const { params } = usePaginationTable();

  // Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useOwnDrugs(token, params);

  const { shadow1, shadow2, background } = useThemeConstants();
  console.log("Fetched data:", data);
  const columnsWithActions = [...columns];

  return (
    <>
      <Helmet>
        <title>Inventory Drugs</title>
        <meta
          name="description"
          content="Manage and track your pharmacy's drug inventory efficiently with real-time updates."
        />
        <meta
          name="keywords"
          content="inventory, drugs, pharmacy, stock management, medicine, warehouse"
        />
        <meta
          property="og:title"
          content="Inventory Drugs Management"
        />
        <meta
          property="og:description"
          content="Easily track and manage pharmaceutical stock with our inventory system."
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
            <AddDrugComponent />
            <AddDrugFromExcel />
          </Box>
        </Box>
        {/* Table */}

        <TableData
          isLoading={isLoading}
          data={data && data.data.drugs}
          columnsWithActions={columnsWithActions}
          check={false}
          paginationAbout={data && data.pagination}
        />
      </Box>
    </>
  );
}

// const columnsWithActions = [PrfileImage, ...columns];

// const PrfileImage = {
//   field: "profileImage",
//   headerName: "PrfileImage",
//   align: "center",
//   headerAlign: "center",
//   minWidth: 150,
//   renderCell: (params) => {
//     return (
//       <Box
//         sx={{
//           pt: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Avatar alt="Remy Sharp" src={params.row.profileImage} />
//       </Box>
//     );
//   },
// };
