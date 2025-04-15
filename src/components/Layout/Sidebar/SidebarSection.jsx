"use client";

/* eslint-disable react/prop-types */
import { Divider, List, useTheme } from "@mui/material";
import Sidebaritem from "./Sidebaritem";

export default function SidebarSection({ items, open }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <>
      <List
        sx={{
          px: 1,
          py: 0.5,
        }}
      >
        {items.map((item) => (
          <Sidebaritem
            key={item.text}
            item={item}
            open={open}
          />
        ))}
        {items.length !== 0 && (
          <Divider
            sx={{
              backgroundColor: isDarkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
              my: 1,
            }}
          />
        )}
      </List>
    </>
  );
}
