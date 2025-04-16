import { Avatar, Box } from "@mui/material";
import { columns } from "./Allusers";
import { useAllUsers } from "../../../lib/hooks/useAdminAction";
import { Helmet } from "react-helmet";
import TableData from "../../../components/TableData/TableData";

export default function Users() {
  const { data, isLoading } = useAllUsers();

  const filteredData = data ? data.filter((row) => row.role !== "admin") : [];

  console.log(filteredData);
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

  const columnsWithActions = [PrfileImage, ...columns];

  return (
    <TableData
      isLoading={isLoading}
      data={filteredData}
      columnsWithActions={columnsWithActions}
      check={true}
      checkTable={false}
    />
  );
}
