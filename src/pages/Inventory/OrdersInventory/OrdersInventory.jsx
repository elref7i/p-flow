import { Box } from "@mui/material";
import { columns } from "./utils/data";
import { useTypeContext } from "@/context/UserType.context";
import { Helmet } from "react-helmet";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useOrders } from "../../../lib/hooks/useOrdersAction";
import OrderDetailsModal from "./_components/order_details_modal";
import UpdateStatusOrder from "./_components/update_status";
import AdminTable from "../../../components/TableAdmin/AdminTable";

export default function OrdersInventory() {
  //Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useOrders();

  //Themes
  const { shadow1 } = useThemeConstants();

  //Variables
  const details = {
    field: "Details",
    headerName: "Details",
    align: "center",
    headerAlign: "center",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ display: "flex", gap: 1, pt: 1 }}>
        <OrderDetailsModal order={params.row} />
      </Box>
    ),
  };

  const actions = {
    field: "actions",
    headerName: "Action",
    align: "center",
    headerAlign: "center",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <UpdateStatusOrder status={params.row.status} />
      </Box>
    ),
  };

  const columnsWithActions = [...columns, details, actions];

  return (
    <>
      <Helmet>
        <title>Users Action</title>
        <meta
          name="description"
          content="A page that displays the actions that users can perform on their data in Our website."
        />
        <meta
          name="keywords"
          content="users, actions, manage data, user control, account settings, website features"
        />
        <meta
          property="og:title"
          content="User Action - Manage Your Data"
        />
        <meta
          property="og:description"
          content="Explore the available actions users can take to manage their data efficiently."
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
        <AdminTable
          isLoading={isLoading}
          data={data && data.data}
          columnsWithActions={columnsWithActions}
          check={false}
          checkTable={false}
        />
      </Box>
    </>
  );
}
