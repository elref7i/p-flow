import { Avatar, Box, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import NotificationSetting from "./notification-setting";

export default function Message() {
  // Themes
  const { textSecondary, textTertiary, cardBackground, cardHoverBackground } =
    useThemeConstants();

  // Variables
  const read = false;
  return (
    <Stack
      py={2}
      px={2}
      direction="row"
      gap={1}
      justifyContent="center"
      alignItems={"center"}
      sx={{
        boxShadow: read ? 8 : 1,
        background: read ? cardBackground : "transparent",
        borderRadius: 1,

        ":hover": { background: cardHoverBackground, boxShadow: read && 7 },
      }}
    >
      {/* Avatar */}
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />

      {/* Content Message */}
      <Box>
        {/* message user */}
        <Typography>Ahmed khled mohmed refai</Typography>

        <Stack
          direction={"row"}
          gap={0.5}
          sx={{ color: textTertiary }}
          alignItems="center"
        >
          <AccessTimeIcon fontSize={"small"} />
          <Typography
            variant="body2"
            color={textSecondary}
            component={"span"}
          >
            2 years
          </Typography>
        </Stack>
      </Box>

      {/* Notification Setting */}
      <NotificationSetting chechRead={read} />
    </Stack>
  );
}
