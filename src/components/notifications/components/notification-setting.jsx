/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function NotificationSetting({ chechRead }) {
  // States
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Open state for the menu
  const open = Boolean(anchorEl);

  // Themes
  const { textPrimary } = useThemeConstants();

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
            sx={{ justifyContent: "flex-start", color: textPrimary, px: 2 }}
            startIcon={<CheckIcon />}
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
            startIcon={<DeleteIcon color="error" />}
          >
            Delete notification
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}
