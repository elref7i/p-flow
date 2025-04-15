"use client";

/* eslint-disable react/prop-types */
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  alpha,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebaritem({ item, open }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { pathname } = useLocation();
  const isActive = pathname === item.path;
  const isDarkMode = theme.palette.mode === "dark";

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
          borderRadius: "8px",
          backgroundColor: isActive
            ? isDarkMode
              ? alpha("#ffffff", 0.1)
              : alpha("#000000", 0.05)
            : "transparent",
          "&:hover": {
            backgroundColor: isDarkMode
              ? alpha("#ffffff", 0.05)
              : alpha("#000000", 0.03),
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
            color: isActive
              ? isDarkMode
                ? "#ffffff"
                : "#000000"
              : isDarkMode
              ? "rgba(255,255,255,0.7)"
              : "rgba(0,0,0,0.7)",
            "& .MuiSvgIcon-root": {
              fontSize: 20,
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
              fontWeight: isActive ? "medium" : "normal",
              fontSize: "0.9rem",
              color: isActive
                ? isDarkMode
                  ? "#ffffff"
                  : "#000000"
                : isDarkMode
                ? "rgba(255,255,255,0.7)"
                : "rgba(0,0,0,0.7)",
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
