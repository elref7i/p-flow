/* eslint-disable react/prop-types */
import { Button, CircularProgress } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import {
  useDeleteAllNotif,
  useMarkAllNotif,
} from "../../../lib/hooks/notifications.actions";
import { useTypeContext } from "../../../context/UserType.context";
export default function NotificationAction({ count, result }) {
  // Context
  const { token } = useTypeContext();

  //Mutations
  const { mutate: markNotif, isLoading: isMarkLoading } = useMarkAllNotif();
  const { mutate: deletNotif, isLoading: isDeleting } = useDeleteAllNotif();

  //functions
  const handleMarkAll = () => {
    markNotif({ token });
    console.log("Marking all notifications as read");
  };
  const handleDeleteAll = () => {
    deletNotif({ token });
  };

  console.log(result);

  return (
    <>
      <Button
        disabled={isDeleting || result === 0}
        variant="outlined"
        color="error"
        onClick={handleDeleteAll}
        startIcon={
          isDeleting ? (
            <CircularProgress
              size={18}
              color="error"
            />
          ) : (
            <CleaningServicesIcon />
          )
        }
      >
        Clear all notification
      </Button>
      <Button
        disabled={isMarkLoading || count === 0}
        onClick={handleMarkAll}
        startIcon={
          isMarkLoading ? (
            <CircularProgress
              size={18}
              color="secondary"
            />
          ) : (
            <DoneAllIcon />
          )
        }
      >
        Mark All as read
      </Button>
    </>
  );
}
