/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export default function NotificationHeader({ count }) {
  return (
    <Box>
      <Typography
        variant="h3"
        color={"white"}
        mb={0.5}
      >
        Notifications ({count})
      </Typography>
    </Box>
  );
}
