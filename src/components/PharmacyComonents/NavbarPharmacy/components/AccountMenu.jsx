"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
import { Stack, useTheme } from "@mui/material";

export default function AccountMenu() {
  //States
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Navigation
  const navigate = useNavigate();

  //Context
  const { logout, userData } = useTypeContext();

  //Theme
  const { typography, error, buttonHover, background, backgroundBlueSoft } =
    useThemeConstants();
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
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 8,
            sx: {
              px: 2,
              py: 2,
              background: background,
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "& .MuiMenuItem-root": {
                "&:hover": {
                  backgroundColor: "transparent",
                  "& .MuiSvgIcon-root": {
                    color: "inherit",
                    transform: "none",
                    transition: "none",
                  },
                },
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 20,
                width: 10,
                height: 10,
                background: backgroundBlueSoft,
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
            fontSize: typography.body2.fontSize,
            "&:hover": {
              backgroundColor: buttonHover,
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Email
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.action.disabled,
                },
              }}
              fontSize="medium"
            />
            <Typography variant="h6">{userData.email}</Typography>
          </Stack>
        </MenuItem>

        <Divider />

        <MenuItem
          sx={{
            py: 1,

            "&:hover": {
              backgroundColor: buttonHover,
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
          onClick={() => {
            navigate("/setting");
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={1}
          >
            <Settings fontSize="small" />
            <Typography variant="h6">Settings</Typography>
          </Stack>
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
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={0}
          >
            <Logout
              color="error"
              fontSize="medium"
            />
            <Typography variant="h6">Logout</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
}
