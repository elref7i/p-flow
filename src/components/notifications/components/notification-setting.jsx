/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useThemeConstants } from "../../../lib/constants/theme.constant";
import {
  useDeleteNotif,
  useMarkNotif,
} from "../../../lib/hooks/notifications.actions";
import { useTypeContext } from "../../../context/UserType.context";
import { CircularProgress } from "@mui/material";

export default function NotificationSetting({ chechRead, notifId }) {
  // States
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Context
  const { token } = useTypeContext();

  // Open state for the menu
  const open = Boolean(anchorEl);

  // Themes
  const { textPrimary } = useThemeConstants();

  // Mutations
  const { mutateAsync: markNotif, isLoading: isMarkLoading } = useMarkNotif({
    token,
    notifId,
  });
  const { mutateAsync: deleteNotif, isLoading: isDeleting } = useDeleteNotif({
    token,
    notifId,
  });

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkRead = async () => {
    try {
      await markNotif({ token, notifId });
      handleClose();
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNotif({ token, notifId });
      handleClose();
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <div>
      {/* Button to open the menu */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>

      {/* Menu component */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
        sx={{
          "& .MuiMenuItem-root": {
            p: 0,
          },
          "& .MuiMenuItem-root:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {/* Button Mark Read */}
        <MenuItem onClick={handleClose}>
          <Button
            disabled={chechRead}
            variant="text"
            fullWidth
            onClick={handleMarkRead}
            sx={{ justifyContent: "flex-start", color: textPrimary, px: 2 }}
            startIcon={
              isMarkLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <CheckIcon />
              )
            }
          >
            Mark as read
          </Button>
        </MenuItem>

        {/* Button Delete */}
        <MenuItem onClick={handleClose}>
          <Button
            sx={{ color: textPrimary, px: 2 }}
            variant="text"
            fullWidth
            onClick={handleDelete}
            startIcon={
              isDeleting ? (
                <CircularProgress color="error" />
              ) : (
                <DeleteIcon color="error" />
              )
            }
          >
            Delete notification
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
