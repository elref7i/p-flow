/* eslint-disable react/prop-types */
import { Badge, CircularProgress } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";

export default function NotificationBage({ dataInfo, isLoading }) {
  return (
    <Badge
      badgeContent={
        isLoading || !dataInfo ? (
          <CircularProgress
            size={14}
            thickness={5}
          />
        ) : (
          dataInfo.data.unreadCount
        )
      }
      color="error"
    >
      <NotificationsIcon />
    </Badge>
  );
}
