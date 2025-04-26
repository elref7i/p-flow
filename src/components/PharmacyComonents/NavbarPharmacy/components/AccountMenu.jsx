"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Person from "@mui/icons-material/Person";
import Email from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import { useTypeContext } from "../../../../context/UserType.context";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../Common/Loading/LoadingSpinner";

export default function AccountMenu() {
  //States
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Context
  const { logout, userData } = useTypeContext();

  //Navigation
  const navigate = useNavigate();

  //Vars
  const open = Boolean(anchorEl);

  // Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!userData) return <LoadingSpinner />;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt={userData.name}
              src={userData.profileImage}
              sx={{
                width: 40,
                height: 40,
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
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
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* User info section */}
        <Box sx={{ px: 2, py: 1, display: "flex", alignItems: "center" }}>
          <Avatar
            alt={userData.name}
            src={userData.profileImage}
            sx={{ width: 40, height: 40, mr: 1.5 }}
          />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold" }}
            >
              {userData.name}
            </Typography>
          </Box>
        </Box>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          {userData.name}
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Email fontSize="small" />
          </ListItemIcon>
          {userData.email}
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            navigate("/setting");
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
