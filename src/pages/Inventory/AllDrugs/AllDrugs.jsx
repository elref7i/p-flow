import { columns } from "./Drugs";
import { useOwnDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import TableData from "../../../components/TableData/TableData";
import { useTypeContext } from "../../../context/UserType.context";
import { useQueryParams } from "../../../context/params.context";
import { Box } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import AddDrugComponent from "../../../components/InventoryComponents/AddDrugComponent/AddDrugComponent";
import AddDrugFromExcel from "../../../components/InventoryComponents/AddDrugFromExcel/AddDrugFromExcel";
import SearchBar from "../../../components/SearchBar/SearchBar";
export default function AllDrugs() {
  //Context
  //States
  const { searchParams } = useQueryParams();

  // Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useOwnDrugs(token, searchParams);

  const { shadow1 } = useThemeConstants();
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
          display: "flex",
          justifyContent: "end",
          gap: 1,
          mb: 3,
          mr: 2,
          alignItems: "center",
        }}
      >
        {/* Add Drug Modal */}
        <AddDrugComponent />

        {/* Add Drug From Excel */}
        <AddDrugFromExcel />
      </Box>
      <Box
        sx={{
          bgcolor: "transparent",
          p: 2,
          borderRadius: 2,
          boxShadow: shadow1,
        }}
      >
        <Box sx={{ mb: 3, mt: 2, width: "100%" }}>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: 1,
              alignItems: "center",
            }}
          >
            {/* Search Bar */}
            <SearchBar />
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
