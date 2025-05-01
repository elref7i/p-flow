import { Box, Card, IconButton, TextField, Typography } from "@mui/material";
import { columns } from "./data";
import { useTypeContext } from "@/context/UserType.context";
import { useAllUsers, useDeleteUser } from "@/lib/hooks/useAdminAction";
import AlertModal from "@/components/AdminComonents/MessageAlert/MessageAlert";
import ModalUpdated from "@/components/AdminComonents/ModalUpdated/ModalUpdated";
import { useActiveAdminUser } from "../../../lib/hooks/useAdminAction";
import { Helmet } from "react-helmet";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import TableData from "../../../components/TableData/TableData";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

// Stats data
const stats = [
  {
    label: "Total Orders This Month",
    value: "200",
    color: "#5E5ADB",
    dotColor: "#5E5ADB",
  },
  {
    label: "Pending Orders",
    value: "20",
    color: "#FF8A00",
    dotColor: "#FF8A00",
  },
  {
    label: "Shipped Orders",
    value: "180",
    color: "#4CAF50",
    dotColor: "#4CAF50",
  },
  {
    label: "Refunded Orders",
    value: "10",
    color: "#F44336",
    dotColor: "#F44336",
  },
];

export default function OrdersInventory() {
  //Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useAllUsers();
  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteUser();
  const { mutate: handleActive } = useActiveAdminUser();

  //Themes
  const { shadow1, shadow2, background, tableBorder } = useThemeConstants();

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

  const columnsWithActions = [...columns, actions];

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
        <Box sx={{ mb: 3, mt: 2, width: "100%" }}>
          {/* Stats cards */}
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {stats.map((stat, index) => (
              <Card
                key={index}
                sx={{
                  p: 2,
                  flex: "1 1 200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderRadius: 3,
                  boxShadow: shadow2,
                  border: tableBorder,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: stat.dotColor,
                      mr: 1,
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {stat.label}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: stat.color }}
                >
                  {stat.value}
                </Typography>
              </Card>
            ))}
          </Box>

          {/* Search bar */}
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
        <TableData
          isLoading={isLoading}
          data={filteredData}
          columnsWithActions={columnsWithActions}
          check={true}
          checkTable={false}
        />
      </Box>
    </>
  );
}
