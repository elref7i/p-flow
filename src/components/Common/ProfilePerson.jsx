/* eslint-disable react/prop-types */
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, ListItemIcon, Stack, Typography } from "@mui/material";
import { useTypeContext } from "@/context/UserType.context";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Logout } from "@mui/icons-material";
import { useThemeContext } from "../../context/theme.context";
import LoadingSpinner from "./Loading/LoadingSpinner";
import { useThemeConstants } from "../../lib/constants/theme.constant";

export default function ProfilePerson({ open }) {
  //States
  const [anchorEl, setAnchorEl] = useState(null);

  //Context
  const { logout, userData } = useTypeContext();

  // Themes
  const { setOpen } = useThemeContext();
  const { sidebarItemHover, typography, textPrimary } = useThemeConstants();

  //Vars
  const openMenue = Boolean(anchorEl);

  //Functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack
        aria-controls={openMenue ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenue ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: textPrimary,
          cursor: "pointer",
          p: open ? 1 : 0,
          borderRadius: 2,
          ":hover": { bgcolor: sidebarItemHover },
          transition: "all ",
        }}
        py={1}
        direction={"row"}
        gap={open ? 2 : 0}
        alignItems={"center"}
        justifyContent={open ? "start" : "center"}
        textAlign={"center"}
        marginInline={open ? 2 : 0}
      >
        {userData ? (
          <>
            <Avatar
              alt={userData.name}
              src={userData.profileImage}
              sx={{
                width: open ? 40 : 40,
                height: open ? 40 : 40,
              }}
            />
            <Stack
              flex={open ? 1 : 0}
              alignItems={"start"}
            >
              <Typography
                textTransform={"capitalize"}
                variant="h2"
                fontWeight={"bold"}
                fontSize={open ? typography.h6.fontSize : 0}
                mb={0.5}
              >
                {userData.name}
              </Typography>
              <Typography
                textTransform={"capitalize"}
                variant="h3"
                fontSize={open ? typography.body2.fontSize : 0}
                color="error"
                fontWeight={"bold"}
              >
                {userData?.role}
              </Typography>
            </Stack>
          </>
        ) : (
          <LoadingSpinner />
        )}

        {open ? <MoreHorizIcon /> : null}
      </Stack>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={openMenue}
        onClose={handleClose}
        sx={{ zIndex: 9999, p: 2 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MenuItem
          onClick={() => {
            logout();
            setOpen(false);
          }}
          sx={{
            ":hover": { bgcolor: sidebarItemHover },
            borderRadius: 1,
            fontWeight: typography.h3.fontWeight,
            fontSize: typography.h6.fontSize,
            p: 1,
          }}
        >
          Logout
          <ListItemIcon>
            <Logout
              fontSize="medium"
              sx={{ ml: 2 }}
              color="error"
            />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </div>
  );
}
