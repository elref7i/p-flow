"use client";

/* eslint-disable react/prop-types */
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, ListItemIcon, Stack, Typography, Box } from "@mui/material";
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
  const {
    typography,
    textPrimary,
    border,
    borderActive,
    boderHover,
    cardBackground,
    backgroundGraySoft,
    backgroundGrayLight,
    backgroundGray,
  } = useThemeConstants();

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
    <Box
      sx={{
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -8,
          left: -8,
          right: -8,
          bottom: -8,
          background: backgroundGraySoft,
          borderRadius: 3,
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        },
        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      <Stack
        aria-controls={openMenue ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenue ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: textPrimary,
          cursor: "pointer",
          p: open ? 1.5 : 1,
          borderRadius: 3,
          boxShadow: 8,
          border: `1px solid ${borderActive}`,
          background: backgroundGray,
          backdropFilter: "blur(10px)",
          ":hover": {
            background: backgroundGrayLight,
            boxShadow: 7,
            transform: "translateY(-2px)",
            border: `1px solid ${boderHover}`,
          },
          ":active": {
            transform: "translateY(0px)",
            boxShadow: 9,
          },
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
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
            <Box
              sx={{
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  borderRadius: "50%",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                },
                "&:hover::after": {
                  opacity: 1,
                },
              }}
            >
              <Avatar
                alt={userData.name}
                src={userData.profileImage}
                sx={{
                  width: open ? 44 : 40,
                  height: open ? 44 : 40,
                  boxShadow: 8,
                  border: `2px solid ${border}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 9,
                  },
                }}
              />
            </Box>
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
                sx={{
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                  letterSpacing: "0.025em",
                }}
              >
                {userData?.name?.split(" ")[0]}
              </Typography>
              <Typography
                textTransform={"capitalize"}
                variant="h3"
                fontSize={open ? typography.body2.fontSize : 0}
                color="error"
                fontWeight={"bold"}
                sx={{
                  textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                  opacity: 0.9,
                }}
              >
                {userData?.role}
              </Typography>
            </Stack>
          </>
        ) : (
          <LoadingSpinner />
        )}

        {open ? (
          <MoreHorizIcon
            sx={{
              opacity: 0.7,
              transition: "all 0.3s ease",
              "&:hover": {
                opacity: 1,
                transform: "rotate(90deg)",
              },
            }}
          />
        ) : null}
      </Stack>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={openMenue}
        onClose={handleClose}
        sx={{
          zIndex: 9999,
          p: 2,
          "& .MuiPaper-root": {
            boxShadow: 7,
            border: `1px solid ${border}`,
            borderRadius: 2,
            backdropFilter: "blur(20px)",
            background: cardBackground,
          },
          ":hover": {
            boxShadow: 8,
          },
        }}
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
            ":hover": {
              background: backgroundGrayLight,
              transform: "translateX(2px)",
            },
            borderRadius: 2,
            fontWeight: typography.h3.fontWeight,
            fontSize: typography.h6.fontSize,
            transition: "all 0.3s ease",
            gap: 1,
            px: 2,
            py: 1,
            m: 1,
          }}
        >
          Logout
          <ListItemIcon>
            <Logout
              fontSize="medium"
              sx={{ ml: 1 }}
              color="error"
            />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Box>
  );
}
