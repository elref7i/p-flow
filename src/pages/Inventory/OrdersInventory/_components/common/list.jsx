/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export default function List({ children }) {
  return <Box sx={{ py: 1 }}>{children}</Box>;
}

export function ListItem({ icon, label, value, bold = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        px: 3,
        py: 1.5,
        borderBottom: "1px solid #f0f0f0",
        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
        <Box sx={{ color: "#5E5ADB", mr: 1.5 }}>{icon}</Box>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          {label}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: bold ? "bold" : "regular",
          color: bold ? "#5E5ADB" : "text.primary",
          flex: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
