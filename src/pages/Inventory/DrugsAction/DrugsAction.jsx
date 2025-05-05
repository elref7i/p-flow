import { Box } from "@mui/material";
import { useTypeContext } from "@/context/UserType.context";
import { columns } from "./data";
import { useDeleteDrug, useOwnDrugs } from "../../../lib/hooks/useDrugAction";
import UpdateModal from "../../../components/InventoryComponents/UpdateModal/UpdateModal";
import { Helmet } from "react-helmet";
import TableData from "../../../components/TableData/TableData";
import { useQueryParams } from "../../../context/params.context";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AlertModal from "../../../components/AdminComonents/MessageAlert/MessageAlert";

export default function DrugsAction() {
  //State
  const { debouncedParams } = useQueryParams();
  // const { setPaginationData } = usePaginationTable();

  //Context
  const { token } = useTypeContext();

  //Themes
  const { shadow1 } = useThemeConstants();

  //Queries
  const { data, isLoading } = useOwnDrugs(token, debouncedParams);

  //Mutaions
  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteDrug();

  console.log(data);

  const actions = {
    field: "actions",
    headerName: "Actions",
    align: "center",
    headerAlign: "center",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <UpdateModal drugId={params.row._id} />
        <AlertModal
          isDeleting={isDeleting}
          handleAction={() => handleDelete({ drugId: params.row._id, token })}
        />
      </Box>
    ),
  };

  const Visibility = {
    field: "isVisible",
    headerName: "Visibility",
    align: "center",
    headerAlign: "center",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ pt: 1 }}>
        {params.row.isVisible ? (
          <CheckCircleIcon
            color="success"
            fontSize="medium"
          />
        ) : (
          <CancelIcon
            color="error"
            fontSize="medium"
          />
        )}
      </Box>
    ),
  };

  const columnsWithActions = [...columns, Visibility, actions];

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
          pt: 3,
          px: 2,
          borderRadius: 2,
          boxShadow: shadow1,
        }}
      >
        {/* Search bar */}
        <Box mb={3}>
          <SearchBar />
        </Box>

        {/* Table */}
        <TableData
          isLoading={isLoading}
          data={data && data.data.drugs}
          columnsWithActions={columnsWithActions}
          paginationAbout={data && data.pagination}
        />
      </Box>
    </>
  );
}
