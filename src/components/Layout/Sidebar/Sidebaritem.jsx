"use client";

/* eslint-disable react/prop-types */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Box,
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
    sidebarText,
    sidebarItemHover,
    sidebarItemActive,
    sidebarIcon,
    typography,
    border,
    borderFocus,
    borderActive,
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
      sx={{
        display: "block",
        mb: 0.5,
        position: "relative",
      }}
    >
      {/* Active state vertical line indicator */}
      {isActive && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 4,
            height: "70%",
            backgroundColor: borderFocus,
            borderRadius: "0 4px 4px 0",
            zIndex: 1,
            boxShadow: 7,
          }}
        />
      )}

      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 48,
          px: 2,
          py: 1,
          ml: isActive ? 1 : 0,
          color: isActive ? "#fff" : sidebarText,
          borderRadius: isActive ? "15px" : "12px",
          backgroundColor: isActive ? sidebarItemActive : "transparent",
          border: isActive ? borderActive : border,
          boxShadow: isActive ? 8 : "",
          "&:hover": {
            backgroundColor: !isActive ? sidebarItemHover : sidebarItemActive,
            boxShadow: !isActive ? 1 : 8,
            border: isActive ? borderActive : border,
          },
          "&:active": {
            boxShadow: isActive ? 8 : 7,
          },
          justifyContent: open ? "initial" : "center",

          position: "relative",
          overflow: "hidden",
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
              filter: isActive
                ? "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"
                : "none",
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
              textShadow: isActive ? "0 1px 2px rgba(0, 0, 0, 0.2)" : "none",
              letterSpacing: isActive ? "0.025em" : "normal",
            },
            transition: theme.transitions.create(["opacity"], {
              duration: theme.transitions.duration.shorter,
            }),
          }}
        />

        {/* Active state glow effect */}
        {isActive && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              background:
                "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
              pointerEvents: "none",
              opacity: 0.6,
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}
