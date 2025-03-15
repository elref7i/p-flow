import { Box } from "@mui/material";
import { useTypeContext } from "@/context/UserType.context";
import Table from "../../../components/InventoryComponents/Table/Table";
import { columns } from "./data";
import { useDeleteDrug, useOwnDrugs } from "../../../lib/hooks/useDrugAction";
import UpdateModal from "../../../components/InventoryComponents/UpdateModal/UpdateModal";
import DeleteModal from "../../../components/InventoryComponents/DeleteModal/DeleteModal";

export default function DrugsAction() {
  const { token } = useTypeContext();

  const { data, isLoading } = useOwnDrugs();
  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteDrug();


  const DeletedColumn = {
    field: "deleted",
    headerName: "Delete",
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
          <DeleteModal
            isDeleting={isDeleting}
            handleAction={() => handleDelete({ drugId: params.row._id, token })}
          />
        </Box>
      );
    },
  };

  const updatedColumn = {
    field: "updated",
    headerName: "Update",
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
          <UpdateModal drugId={params.row._id} />
        </Box>
      );
    },
  };

  const columnsWithActions = [...columns, DeletedColumn ,updatedColumn];

  return (
    <>
      <Table
        isLoading={isLoading}
        data={data || []}
        columnsWithActions={columnsWithActions}
        check={true}
      />
    </>
  );
}
