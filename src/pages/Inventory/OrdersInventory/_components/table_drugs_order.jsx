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
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function TableDrugsOrder({ drugs, pricing }) {
  const {
    cardBackground,
    cardHoverBackground,
    cardDetailsBackground,
    headerBackground,
    badgeBackground,
    border,
    borderHover,
    textLink,
  } = useThemeConstants();
  return (
    <Card
      elevation={8}
      sx={{
        background: cardBackground,
        borderRadius: 3,
        border: `1px solid ${border}`,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: headerBackground,
          px: 3,
          py: 2,
          borderBottom: `1px solid ${borderHover}`,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <MedicalServices fontSize="small" color="primary" />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Ordered Drugs
        </Typography>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <TableContainer sx={{ maxHeight: 300, overflowY: "auto" }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", bgcolor: cardBackground }}>
                  Drug Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: cardBackground }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: cardBackground }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", bgcolor: cardBackground }}
                >
                  Free Items
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", bgcolor: cardBackground }}
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
                    "&:nth-of-type(odd)": { background: cardDetailsBackground },
                    "&:hover": { background: cardHoverBackground },
                  }}
                >
                  <TableCell>
                    <Tooltip title={drugItem.drug.name} arrow placement="top">
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
                    {drugItem.drug.price.toFixed(2)} L.E
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={drugItem.paidQuantity}
                      size="medium"
                      sx={{
                        bgcolor: badgeBackground,
                        minWidth: "30px",
                        boxShadow: 8,
                        ":hover": {
                          boxShadow: 7,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={drugItem.freeItems}
                      size="medium"
                      sx={{
                        background: badgeBackground,
                        minWidth: "35px",
                        boxShadow: 7,
                        ":hover": {
                          boxShadow: 8,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: "medium" }}>
                    {(drugItem.drug.price * drugItem.paidQuantity).toFixed(2)}{" "}
                    L.E
                  </TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ bgcolor: cardBackground }}>
                <TableCell
                  colSpan={4}
                  align="right"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", color: textLink, fontSize: "15px" }}
                >
                  {pricing.subtotal.toFixed(2)} L.E
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
