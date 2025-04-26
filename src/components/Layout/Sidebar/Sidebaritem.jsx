"use client";

/* eslint-disable react/prop-types */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function Sidebaritem({ item, open }) {
  //Navigation
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //Theme
  const theme = useTheme();
  const {
    textPrimary,
    sidebarItemHover,
    sidebarItemActive,
    sidebarIcon,
    typography,
  } = useThemeConstants();

  const isActive = pathname === item.path;

  const handleClick = () => {
    if (item.text === "Sign out") {
      return;
    }
    navigate(item.path);
  };

  return (
    <ListItem
      key={item.text}
      disablePadding
      sx={{ display: "block", mb: 0.5 }}
    >
      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 48,
          px: 2,
          py: 1,
          color: isActive ? "#fff" : textPrimary,
          borderRadius: "8px",
          backgroundColor: isActive ? sidebarItemActive : "transparent",
          "&:hover": {
            backgroundColor: !isActive && sidebarItemHover,
          },
          justifyContent: open ? "initial" : "center",
          transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.shorter,
          }),
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 2 : "auto",
            justifyContent: "center",
            color: isActive ? "#fff" : sidebarIcon,
            "& .MuiSvgIcon-root": {
              fontSize: typography.h4.fontSize,
            },
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{
            opacity: open ? 1 : 0,
            "& .MuiTypography-root": {
              fontWeight: isActive
                ? typography.h1.fontWeight
                : typography.h3.fontWeight,
              fontSize: typography.h6.fontSize,
            },
            transition: theme.transitions.create(["opacity"], {
              duration: theme.transitions.duration.shorter,
            }),
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
