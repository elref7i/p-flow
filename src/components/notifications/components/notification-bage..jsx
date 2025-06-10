/* eslint-disable react/prop-types */
import { Badge, CircularProgress } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { useCountNotif } from "../../../lib/hooks/notifications.actions";
import { useTypeContext } from "../../../context/UserType.context";

export default function NotificationBage() {
  const { token } = useTypeContext();

  //Queries
  const { data: payload, isLoading } = useCountNotif({ token });

  // console.log(payload.unreadCount);

  return (
    <Badge
      badgeContent={
        isLoading || !payload ? (
          <CircularProgress
            size={14}
            thickness={5}
          />
        ) : (
          payload.data.unreadCount
        )
      }
      color="error"
    >
      <NotificationsIcon />
    </Badge>
  );
}
