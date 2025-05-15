/* eslint-disable react/prop-types */
import { MedicalServices } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

export default function TableDrugsOrder({ drugs, pricing }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f8f9fa",
          px: 3,
          py: 2,
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <MedicalServices
          fontSize="small"
          color="primary"
        />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
        >
          Ordered Drugs
        </Typography>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <TableContainer sx={{ maxHeight: 300, overflowY: "auto" }}>
          <Table
            size="small"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", bgcolor: "#f8f9fa" }}>
                  Drug Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: "#f8f9fa" }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: "#f8f9fa" }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: "#f8f9fa" }}
                >
                  Free Items
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", bgcolor: "#f8f9fa" }}
                >
                  Subtotal
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drugs.map((drugItem, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": { bgcolor: "#fafafa" },
                    "&:hover": { bgcolor: "#f5f5f5" },
                  }}
                >
                  <TableCell>
                    <Tooltip
                      title={drugItem.drug.name}
                      arrow
                      placement="top"
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          maxWidth: 200,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {drugItem.drug.name}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="center">
                    ${drugItem.drug.price.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={drugItem.paidQuantity}
                      size="small"
                      sx={{
                        bgcolor: "#5E5ADB20",
                        minWidth: "30px",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={drugItem.freeItems}
                      size="small"
                      sx={{
                        bgcolor: "#4CAF5020",
                        minWidth: "30px",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ fontWeight: "medium" }}
                  >
                    ${(drugItem.drug.price * drugItem.paidQuantity).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ bgcolor: "#f8f9fa" }}>
                <TableCell
                  colSpan={4}
                  align="right"
                  sx={{ fontWeight: "bold" }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", color: "#5E5ADB" }}
                >
                  ${pricing.subtotal.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
