/* eslint-disable react/prop-types */
import { Avatar, Box, Stack, Typography, Chip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import NotificationSetting from "./notification-setting";

// Helper function to format time difference
const formatTimeAgo = (dateString) => {
  const now = new Date();
  const sentDate = new Date(dateString);
  const diffInMs = now - sentDate;

  const minutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  if (months < 12) return `${months}mo ago`;
  return `${years}y ago`;
};

// Helper function to get notification type color
const getNotificationTypeColor = (type) => {
  switch (type) {
    case "info":
      return "info";
    case "success":
      return "success";
    case "warning":
      return "warning";
    case "error":
      return "error";
    default:
      return "default";
  }
};

export default function Message({ dataInfo }) {
  // Themes
  const { textSecondary, textTertiary, cardBackground, cardHoverBackground } =
    useThemeConstants();

  // Extract data from dataInfo
  const { userId, title, body, imageUrl, type, isRead, sentAt } = dataInfo;

  const timeAgo = formatTimeAgo(sentAt);

  return (
    <Stack
      py={2}
      px={2}
      direction="row"
      gap={2}
      mb={1}
      alignItems="flex-start"
      sx={{
        boxShadow: !isRead ? 2 : 1,
        background: !isRead ? cardBackground : "transparent",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          background: cardHoverBackground,
          boxShadow: 3,
          transform: "translateY(-1px)",
        },
      }}
    >
      {/* Avatar */}
      <Avatar
        alt={userId.name}
        src={imageUrl}
        sx={{
          width: 48,
          height: 48,
          border: !isRead ? "2px solid" : "1px solid",
          borderColor: !isRead ? "primary.main" : "grey.300",
        }}
      />

      {/* Content Message */}
      <Box
        flex={1}
        minWidth={0}
      >
        {/* Header with user name and notification type */}
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          mb={0.5}
          flexWrap="wrap"
        >
          <Typography
            variant="subtitle2"
            fontWeight={!isRead ? 600 : 500}
            color={!isRead ? "text.primary" : textSecondary}
            noWrap
          >
            {userId.name}
          </Typography>
          <Chip
            label={type}
            size="small"
            color={getNotificationTypeColor(type)}
            variant="outlined"
            sx={{ height: 20, fontSize: "0.7rem" }}
          />
        </Stack>

        {/* Notification Title */}
        <Typography
          variant="body1"
          fontWeight={!isRead ? 600 : 500}
          color="text.primary"
          mb={0.5}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            width: "fit-content",
          }}
        >
          {title}
        </Typography>

        {/* Notification Body */}
        <Typography
          variant="body2"
          color={textSecondary}
          mb={1}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.4,
            textWrap: "wrap",
            maxWidth: "300px",
            maxHeight: "2.8em",
          }}
        >
          {body}
        </Typography>

        {/* Time and User Role */}
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            gap={0.5}
            sx={{ color: textTertiary }}
            alignItems="center"
          >
            <AccessTimeIcon fontSize="small" />
            <Typography
              variant="caption"
              color={textTertiary}
              component="span"
            >
              {timeAgo}
            </Typography>
          </Stack>

          <Typography
            variant="caption"
            color={textTertiary}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "grey.100",
              px: 1,
              py: 0.25,
              borderRadius: 1,
              fontSize: "0.7rem",
            }}
          >
            {userId.role}
          </Typography>
        </Stack>
      </Box>

      {/* Notification Setting */}
      <NotificationSetting chechRead={isRead} />
    </Stack>
  );
}
