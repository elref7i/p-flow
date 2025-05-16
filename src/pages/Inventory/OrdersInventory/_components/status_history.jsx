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
import { useThemeConstants } from "../../../../lib/constants/theme.constant";

export default function StatusHistory({ statusHistory }) {
  const {
    cardBackground,
    cardHoverBackground,
    cardDetailsBackground,
    headerBackground,
    border,
    borderHover,
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
          ":hover": {
            boxShadow: 6,
          },
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
                    background: cardBackground,
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: cardBackground,
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: cardBackground,
                  }}
                >
                  Note
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: cardBackground,
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
                      background: cardDetailsBackground,
                    },
                    "&:hover": { bgcolor: cardHoverBackground },
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
