import { Box, Typography } from "@mui/material";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function NotificationHeader() {
  //Themes
  const { textPrimary, textTertiary } = useThemeConstants();

  return (
    <Box>
      <Typography
        variant="h6"
        color={textPrimary}
        mb={0.5}
      >
        Notifications
      </Typography>
      <Typography
        variant="body2"
        color={textTertiary}
      >
        You have 2 unread messages
      </Typography>
    </Box>
  );
}
