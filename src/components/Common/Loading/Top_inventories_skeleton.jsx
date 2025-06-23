import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Skeleton,
  Paper,
  Typography,
} from "@mui/material";

const Top_inventories_skeleton = () => {
  const rows = Array.from({ length: 3 });

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Top Inventories
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Order Count</TableCell>
            <TableCell>Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton variant="text" width={100} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={180} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={120} />
              </TableCell>
              <TableCell>
                <Skeleton variant="text" width={40} />
              </TableCell>
              <TableCell>
                <Skeleton
                  variant="rounded"
                  width={60}
                  height={28}
                  sx={{ borderRadius: "16px" }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Top_inventories_skeleton;
