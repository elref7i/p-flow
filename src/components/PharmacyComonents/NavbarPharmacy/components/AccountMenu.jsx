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
import Email from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import { useTypeContext } from "../../../../context/UserType.context";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../Common/Loading/LoadingSpinner";
import { useThemeConstants } from "../../../../lib/constants/theme.constant";
import { useTheme } from "@mui/material";

export default function AccountMenu() {
  //States
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Navigation
  const navigate = useNavigate();

  //Context
  const { logout, userData } = useTypeContext();

  //Theme
  const { typography, error, buttonHover } = useThemeConstants();
  const theme = useTheme();

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
        disableScrollLock
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 3,
            sx: {
              px: 2,
              py: 2,
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
        <Box
          sx={{
            px: 2,
            pb: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={userData.name}
            src={userData.profileImage}
            sx={{ width: 80, height: 80, mr: 2 }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: typography.h5.fontSize,
                fontWeight: typography.h5.fontWeight,
                lineHeight: typography.h5.lineHeight,
              }}
              variant="subtitle1"
            >
              {userData.name}
            </Typography>
          </Box>
        </Box>

        <MenuItem
          sx={{
            py: 1,
            borderRadius: "5px",
            fontSize: typography.h5.fontSize,
            fontWeight: typography.h5.fontWeight,
            lineHeight: typography.h5.lineHeight,
            "&:hover": {
              backgroundColor: buttonHover,
              "& .MuiSvgIcon-root": {
                color: "white",
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
              },
            },
          }}
        >
          <ListItemIcon>
            <Email
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.action.disabled,
                },
              }}
              fontSize="medium"
            />
          </ListItemIcon>
          {userData.email}
        </MenuItem>

        <Divider />

        <MenuItem
          sx={{
            py: 1,
            borderRadius: "5px",
            fontSize: typography.h5.fontSize,
            fontWeight: typography.h5.fontWeight,
            lineHeight: typography.h5.lineHeight,
            "&:hover": {
              backgroundColor: buttonHover,
              "& .MuiSvgIcon-root": {
                color: "white",
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
              },
            },
          }}
          onClick={() => {
            navigate("/setting");
          }}
        >
          <ListItemIcon>
            <Settings fontSize="medium" />
          </ListItemIcon>
          Settings
        </MenuItem>

        <MenuItem
          onClick={logout}
          color="error"
          sx={{
            py: 1,
            pl: 2.5,
            borderRadius: "5px",
            color: error,
            fontSize: typography.h5.fontSize,
            fontWeight: typography.h5.fontWeight,
            lineHeight: typography.h5.lineHeight,
          }}
        >
          <ListItemIcon>
            <Logout
              color="error"
              fontSize="medium"
            />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
