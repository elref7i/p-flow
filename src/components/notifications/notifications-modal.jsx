import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Badge, Box, Stack, Typography } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import { useThemeConstants } from "../../lib/constants/theme.constant";
import Message from "./components/message";

export default function NotificationsModal() {
  // State
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Themes
  const { textPrimary, textTertiary, textLink, background, gradientNavy } =
    useThemeConstants();

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        oncl
        color="inherit"
      >
        <Badge
          badgeContent={17}
          color="error"
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        onClose={handleClose}
        disableScrollLock
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              background: background,
              py: 1,
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                background: gradientNavy,
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
              "& .MuiMenuItem-root:hover": {
                backgroundColor: "transparent",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
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
        </MenuItem>
        <Divider />
        <MenuItem sx={{ p: 0 }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              pl={"16px"}
              pb={0.5}
              variant="h6"
              color={textLink}
              mb={0.5}
            >
              New
            </Typography>

            {/* Messages */}
            <Stack
              spacing={1}
              pb={2}
            >
              <Message />
            </Stack>
          </Box>
        </MenuItem>

        {/* Message un read  */}
        <MenuItem sx={{ p: 0 }}>
          <Box sx={{ width: "100%" }}>
            <Typography
              pl={"16px"}
              pb={0.5}
              variant="h6"
              color={textLink}
              mb={0.5}
            >
              Before that
            </Typography>

            {/* Messages */}
            <Stack spacing={1}>
              <Message />
            </Stack>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
