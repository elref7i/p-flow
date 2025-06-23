import { Box, IconButton } from "@mui/material";
import { columns } from "./data";
import { useTypeContext } from "@/context/UserType.context";
import { Helmet } from "react-helmet";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdminTable from "../../../components/TableAdmin/AdminTable";
import AlertModal from "@/components/MessageAlert";
import ModalUpdated from "../_components/ModalUpdated";
import {
  useActiveAdminUser,
  useAllUsers,
  useDeleteUser,
} from "@/lib/hooks/use-admin";
export default function UsersAction() {
  //Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useAllUsers();
  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteUser();
  const { mutate: handleActive } = useActiveAdminUser();

  //Vars
  const filteredData = data ? data.filter((row) => row.role !== "admin") : [];

  const actions = {
    field: "actions",
    headerName: "Action",
    align: "center",
    headerAlign: "center",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <ModalUpdated userId={params.row._id} />
        <AlertModal
          isDeleting={isDeleting}
          handleAction={() => handleDelete({ userId: params.row._id, token })}
        />
        <IconButton
          onClick={() => {
            handleActive({ userId: params.row._id, token });
          }}
          size="small"
        >
          <MoreVertIcon fontSize="medium" />
        </IconButton>
      </Box>
    ),
  };

  //Verify User in Table
  const verifie = {
    field: "isVerified",
    headerName: "Verify Email",
    align: "center",
    headerAlign: "center",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ pt: 1 }}>
        {params.row.isVerified ? (
          <VerifiedIcon
            color="success"
            fontSize="medium"
          />
        ) : (
          <NewReleasesIcon
            color="warning"
            fontSize="medium"
          />
        )}
      </Box>
    ),
  };

  //Active User In table
  const active = {
    field: "active",
    headerName: "Active User",
    align: "center",
    headerAlign: "center",
    width: 120,
    sortable: false,
    renderCell: (params) => (
      <Box sx={{ pt: 1 }}>
        {params.row.active === true ? (
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

  const columnsWithActions = [...columns, verifie, active, actions];

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
      <AdminTable
        isLoading={isLoading}
        data={filteredData}
        columnsWithActions={columnsWithActions}
        check={false}
        checkTable={false}
      />
    </>
  );
}
