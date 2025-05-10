/* eslint-disable react/prop-types */
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function DrugsTable({ drugs }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Ordered Drugs
      </Typography>
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ overflowX: "auto" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Medication Name</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drugs.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography>{item.drug?.name}</Typography>
                </TableCell>
                <TableCell align="right">
                  {item.drug?.price.toFixed(2)} EGP
                </TableCell>
                <TableCell align="right">{item.paidQuantity}</TableCell>
                <TableCell align="right">
                  {(item.paidQuantity * item.drug?.price).toFixed(2)} EGP
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
