// import { Avatar, Box } from "@mui/material";
import { columns } from './Drugs';
import Table from '../../../components/InventoryComponents/Table/Table';
// import { useAllDrugs } from '../../../lib/hooks/useDrugAction';

export default function AllDrugs() {
  //* بظمتك الداء ليه ادمن بذمتك بذمتك  بصيت على postman تشوف function فيها اى وعايزه اى

  // const { data, isLoading } = useAllDrugs();

  const filteredData = data ? data.filter((row) => row.role !== 'admin') : [];

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

  const columnsWithActions = [...columns];
  // const columnsWithActions = [PrfileImage, ...columns];

  return (
    <Table
      isLoading={isLoading}
      data={filteredData}
      columnsWithActions={columnsWithActions}
      check={false}
    />
  );
}
