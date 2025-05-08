import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import {
  ShoppingCart as TransactionIcon,
  MoreVert as MoreVertIcon,
  KeyboardArrowRight as ArrowRightIcon,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

const SeeDetailLink = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "0.8rem",
  color: theme.palette.primary.main,
  cursor: "pointer",
  "& svg": {
    fontSize: "1rem",
  },
}));

// Mock data
const transactionData = [
  {
    id: "INV_002024001",
    type: "Purchase Order",
    name: "MedLife Pharma",
    time: "1 Jan 2024, 10:00",
    amount: 9874.65,
    status: "In Progress",
  },
  {
    id: "INV_002024002",
    type: "Inventory Restock",
    name: "HealthCare Supplies",
    time: "1 Jan 2024, 12:30",
    amount: 617.28,
    status: "Pending",
  },
  {
    id: "INV_002024003",
    type: "Software Subscription",
    name: "PharmaSys",
    time: "30 Dec 2023, 16:15",
    amount: 148.01,
    status: "Completed",
  },
  {
    id: "INV_002024004",
    type: "Inventory Restock",
    name: "MediSupplies Co.",
    time: "27 Dec 2023, 21:45",
    amount: 422.35,
    status: "Completed",
  },
  {
    id: "INV_002024005",
    type: "Purchase Order",
    name: "Global Pharma Inc.",
    time: "25 Dec 2023, 23:25",
    amount: 812.21,
    status: "Canceled",
  },
];

const getStatusChipColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Pending":
      return "warning";
    case "In Progress":
      return "info";
    case "Canceled":
      return "error";
    default:
      return "default";
  }
};

export default function TransactionHistory() {
  const { tableBackground, background } = useThemeConstants();

  return (
    <Paper
      elevation={7}
      sx={{ p: 2, background: tableBackground, "&:hover": { boxShadow: 9 } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Transaction History</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<TransactionIcon />}
          >
            Transaction
          </Button>
          <Button
            variant="outlined"
            size="small"
          >
            Timeframe
          </Button>
          <Button
            variant="outlined"
            size="small"
          >
            Status
          </Button>
          <IconButton size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <TableContainer>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="transaction table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Transaction Type</TableCell>
              <TableCell>Vendor Name</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: alpha(background, 0.1),
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 1.5,
                      }}
                    >
                      <TransactionIcon
                        fontSize="small"
                        color="primary"
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2">{row.type}</Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        {row.id}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                  $
                  {row.amount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    size="small"
                    color={getStatusChipColor(row.status)}
                    sx={{
                      borderRadius: "16px",
                      fontWeight: 500,
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <SeeDetailLink>
                    See Detail <ArrowRightIcon />
                  </SeeDetailLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
