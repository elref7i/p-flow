import { columns } from './Drugs';
import Table from '../../../components/InventoryComponents/Table/Table';
import { useOwnDrugs } from '../../../lib/hooks/useDrugAction';

export default function AllDrugs() {
  const { data, isLoading } = useOwnDrugs();
  
  // console.log("Fetched data:", data);
  const columnsWithActions = [...columns];

  return (
    <Table
      isLoading={isLoading}
      data={data || []}
      columnsWithActions={columnsWithActions}
      check={false}
    />
  );
}











  // const columnsWithActions = [PrfileImage, ...columns];



  // const PrfileImage = {
  //   field: "profileImage",
  //   headerName: "PrfileImage",
  //   align: "center",
  //   headerAlign: "center",
  //   minWidth: 150,
  //   renderCell: (params) => {
  //     return (
  //       <Box
  //         sx={{
  //           pt: 1,
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Avatar alt="Remy Sharp" src={params.row.profileImage} />
  //       </Box>
  //     );
  //   },
  // };