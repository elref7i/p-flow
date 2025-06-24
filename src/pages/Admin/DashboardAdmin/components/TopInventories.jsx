import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useAdminStatstics } from "../../../../lib/hooks/useAdminAction";
import { formatNumber } from "../../../../lib/utils/formateNumber";
import Top_inventories_skeleton from "../../../../components/Common/Loading/Top_inventories_skeleton";

export default function TopInventories() {
  const { tableBackground } = useThemeConstants();
  const { data, isLoading } = useAdminStatstics();
  const inventories = data?.topInventories || [];
  if (isLoading) return <Top_inventories_skeleton />;

  return (
    <>
      {inventories.length > 0 && (
        <Paper
          elevation={7}
          sx={{
            p: 2,
            background: tableBackground,
            "&:hover": { boxShadow: 9 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h5">Top Inventories</Typography>
          </Box>

          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="transaction table">
              <TableHead>
                <TableRow>
                  <TableCell> Name</TableCell>
                  <TableCell> Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Order Count</TableCell>
                  <TableCell>Total Sales</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventories.map((inv) => (
                  <TableRow
                    key={inv._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{inv.inventoryName}</TableCell>
                    <TableCell>
                      <Typography>{inv.email}</Typography>
                    </TableCell>
                    <TableCell>{inv.phone}</TableCell>
                    <TableCell>{inv.orderCount}</TableCell>
                    <TableCell>
                      <Chip
                        label={formatNumber(inv.totalSales)}
                        size="small"
                        sx={{
                          borderRadius: "16px",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </>
  );
}
