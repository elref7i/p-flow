import { columns } from "./Drugs";
import { useOwnDrugs } from "../../../lib/hooks/useDrugAction";
import { Helmet } from "react-helmet";
import TableData from "../../../components/TableData/TableData";
import { useTypeContext } from "../../../context/UserType.context";
import { usePaginationTable } from "../../../context/Pagination.context";
export default function AllDrugs() {
  //Context
  //States
  const { params } = usePaginationTable();

  // Context
  const { token } = useTypeContext();

  //Queries
  const { data, isLoading } = useOwnDrugs(token, params);

  console.log("Fetched data:", data);
  const columnsWithActions = [...columns];

  return (
    <>
      <Helmet>
        <title>Inventory Drugs</title>
        <meta
          name="description"
          content="Manage and track your pharmacy's drug inventory efficiently with real-time updates."
        />
        <meta
          name="keywords"
          content="inventory, drugs, pharmacy, stock management, medicine, warehouse"
        />
        <meta
          property="og:title"
          content="Inventory Drugs Management"
        />
        <meta
          property="og:description"
          content="Easily track and manage pharmaceutical stock with our inventory system."
        />
      </Helmet>

      {/* Table */}
      <TableData
        isLoading={isLoading}
        data={data && data.data.drugs}
        columnsWithActions={columnsWithActions}
        check={false}
        checkTable={true}
        paginationAbout={data && data.pagination}
      />
    </>
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
