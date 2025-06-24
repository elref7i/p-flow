import { Avatar, Box } from "@mui/material";
import { columns } from "./Allusers";
import { Helmet } from "react-helmet";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdminTable from "../../../components/TableAdmin/AdminTable";
import { useAllUsers } from "../../../lib/hooks/use-admin";
export default function Users() {
  //States

  const { data, isLoading } = useAllUsers();

  const filteredData = data ? data.filter((row) => row.role !== "admin") : [];

  console.log(filteredData);

  //Profile Image in Table
  const PrfileImage = {
    field: "profileImage",
    headerName: "PrfileImage",
    align: "center",
    headerAlign: "center",
    minWidth: 150,
    renderCell: (params) => {
      return (
        <>
          <Helmet>
            <title>Users</title>
            <meta
              name="description"
              content="A Page that displays all usesrs in our website"
            />
            <meta
              name="keywords"
              content="users, profiles, website users"
            />
            <meta
              property="og:description"
              content="Explore all registered users in our community."
            />
          </Helmet>
          <Box
            sx={{
              pt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={params.row.profileImage}
            />
          </Box>
        </>
      );
    },
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

  const columnsWithActions = [PrfileImage, ...columns, verifie, active];

  return (
    <AdminTable
      isLoading={isLoading}
      data={filteredData}
      columnsWithActions={columnsWithActions}
      check={true}
    />
  );
}
