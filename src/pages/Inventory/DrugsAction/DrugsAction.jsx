import { Box } from '@mui/material';
import { useTypeContext } from '@/context/UserType.context';
import AlertModal from '@/components/AdminComonents/MessageAlert/MessageAlert';
import ModalUpdated from '@/components/AdminComonents/ModalUpdated/ModalUpdated';
import Table from '../../../components/InventoryComponents/Table/Table';
import { columns } from './data';
import { useDeleteDrug } from '../../../lib/hooks/useDrugAction';

export default function DrugsAction() {
  const { token } = useTypeContext();

  // const {data, isLoading} = useAllDrugs();

  const { isLoading: isDeleting, mutate: handleDelete } = useDeleteDrug();

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];

  const DeletedColumn = {
    field: 'deleted',
    headerName: 'Deleted',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            px: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AlertModal
            isDeleting={isDeleting}
            handleAction={() => handleDelete({ drugId: params.row._id, token })}
          />
        </Box>
      );
    },
  };

  const updatedColumn = {
    field: 'updated',
    headerName: 'Updated',
    align: 'center',
    headerAlign: 'center',
    minWidth: 150,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            px: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ModalUpdated drugId={params.row._id} />
        </Box>
      );
    },
  };

  const columnsWithActions = [...columns, DeletedColumn, updatedColumn];

  return (
    <>
      <Table
        isLoading={isLoading}
        data={filteredData}
        columnsWithActions={columnsWithActions}
        check={true}
      />
    </>
  );
}
