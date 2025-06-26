import { Box } from "@mui/material";
import { columns } from "./utils/data";
import { useTypeContext } from "@/context/UserType.context";
import { Helmet } from "react-helmet";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import { useOrders, useRejectOrder } from "../../../lib/hooks/useOrdersAction";
import OrderDetailsModal from "./_components/order_details_modal";
import UpdateStatusOrder from "./_components/update_status";
import AdminTable from "@/components/TableAdmin/AdminTable";
import AlertModal from "@/components/MessageAlert";

export default function OrdersInventory() {
  //Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useOrders();

  //Mutations
  const { mutate, isLoading: rejectOrder } = useRejectOrder();

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
        <UpdateStatusOrder status={params.row.status} id={params.row._id} />
        {params.row.status === "pending" ? (
          <AlertModal
            isDeleting={rejectOrder}
            handleAction={() => mutate({ token, orderId: params.row._id })}
          />
        ) : (
          ""
        )}
      </Box>
    ),
  };

  const columnsWithActions = [...columns, details, actions];

  return (
    <>
      <Helmet>
        <title>Orders</title>
        <meta
          name="description"
          content="View and manage all your pharmacy orders in one place. Track statuses, payment details, and more with the P-Flow system."
        />
        <meta
          name="keywords"
          content="pharmacy orders, order management, P-Flow, order tracking, pharmacy system"
        />
        <meta property="og:title" content="Orders | P-Flow Pharmacy System" />
        <meta
          property="og:description"
          content="Easily manage pharmacy orders, monitor status, and handle payments using the powerful P-Flow platform."
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
        />
      </Box>
    </>
  );
}
