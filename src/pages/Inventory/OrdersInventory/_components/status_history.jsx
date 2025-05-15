/* eslint-disable react/prop-types */
import { ReceiptLong } from "@mui/icons-material";
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
  Typography,
} from "@mui/material";
import { formatDate } from "../../../../lib/utils/formDate";
import { getStatusColor, getStatusIcon } from "../utils/status_functions";

export default function StatusHistory({ statusHistory }) {
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
        <ReceiptLong
          fontSize="small"
          color="primary"
        />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold" }}
        >
          Status History
        </Typography>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <TableContainer sx={{ maxHeight: 200, overflowY: "auto" }}>
          <Table
            size="small"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "#f8f9fa",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "#f8f9fa",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "#f8f9fa",
                  }}
                >
                  Note
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "#f8f9fa",
                  }}
                >
                  Updated By
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statusHistory.map((history, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": {
                      bgcolor: "#fafafa",
                    },
                    "&:hover": { bgcolor: "#f5f5f5" },
                  }}
                >
                  <TableCell>
                    <Chip
                      label={history.status}
                      size="small"
                      icon={getStatusIcon(history.status)}
                      sx={{
                        bgcolor: `${getStatusColor(history.status)}20`,
                        color: getStatusColor(history.status),
                        fontWeight: "medium",
                        "& .MuiChip-icon": {
                          color: getStatusColor(history.status),
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell>{formatDate(history.timestamp)}</TableCell>
                  <TableCell>{history.note}</TableCell>
                  <TableCell>{history.updatedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
