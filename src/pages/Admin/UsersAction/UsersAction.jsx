import { Box, Button } from "@mui/material";
import { columns } from "./data";
import { useTypeContext } from "@/context/UserType.context";
import { useAllUsers, useDeleteUser } from "@/lib/hooks/useAdminAction";
import AlertModal from "@/components/AdminComonents/MessageAlert/MessageAlert";
import ModalUpdated from "@/components/AdminComonents/ModalUpdated/ModalUpdated";
import Table from "../../../components/Table/Table";
import { useActiveAdminUser } from "../../../lib/hooks/useAdminAction";
import { Helmet } from "react-helmet";

export default function UsersAction() {
  const { token } = useTypeContext();
  const { data, isLoading } = useAllUsers();
  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteUser();
  const { mutate: handleActive } = useActiveAdminUser();

  const filteredData = data ? data.filter((row) => row.role !== "admin") : [];

  const DeletedColumn = {
    field: "deleted",
    headerName: "Deleted",
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
          <AlertModal
            isDeleting={isDeleting}
            handleAction={() => handleDelete({ userId: params.row._id, token })}
          />
        </Box>
      );
    },
  };
  const ActiveUser = {
    field: "Acitve",
    headerName: "Active",
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <Box
          component={"form"}
          sx={{
            pt: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="submit"
            onClick={() => {
              handleActive({ userId: params.row._id, token });
            }}
            variant="contained"
            fullWidth
            color="success"
          >
            Active
          </Button>
        </Box>
      );
    },
  };

  const updatedColumn = {
    field: "updated",
    headerName: "Updated",
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
          <ModalUpdated userId={params.row._id} />
        </Box>
      );
    },
  };

  const columnsWithActions = [
    ...columns,
    ActiveUser,
    DeletedColumn,
    updatedColumn,
  ];

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

      <Table
        isLoading={isLoading}
        data={filteredData}
        columnsWithActions={columnsWithActions}
        check={true}
        checkTable={"admin".toLowerCase()}
      />
    </>
  );
}
