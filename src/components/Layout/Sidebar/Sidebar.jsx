"use client";

import { Divider, useTheme, Box, Typography } from "@mui/material";
import { useThemeContext } from "@/context/theme.context";
import { Drawer, DrawerHeader } from "../../Common/Drawer";
import { admin, inventory, pharmacy } from "./DefaultItemes";
import { useTypeContext } from "@/context/UserType.context";
import SidebarSection from "./SidebarSection";
import ProfilePerson from "../../Common/ProfilePerson";

export default function Sidebar() {
  const theme = useTheme();
  const { open, isLargeScreen } = useThemeContext();
  const { role } = useTypeContext();

  const inentory = theme.palette.background.navbarPharmacy;

  const { HeaderSection, MiddleSection, FooterSection } =
    role === "admin" ? admin : role === "pharmacy" ? pharmacy : inventory;

  const isDarkMode = theme.palette.mode === "dark";

  // Force open state on large screens
  const isOpen = isLargeScreen ? true : open;

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: inentory,
          color: isDarkMode ? "#ffffff" : "#000000",
          boxShadow: isDarkMode
            ? "0 4px 20px 0 rgba(0,0,0,0.5)"
            : "0 4px 20px 0 rgba(0,0,0,0.08)",
          borderRight: `1px solid ${
            isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
          }`,
          width: isOpen ? 240 : 65,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
        },
      }}
    >
      <DrawerHeader
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 8px",
          minHeight: "64px",
        }}
      >
        {isOpen && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Team 1
            </Typography>
          </Box>
        )}
      </DrawerHeader>
      <Divider
        sx={{
          backgroundColor: isDarkMode
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        }}
      />
      <SidebarSection
        items={HeaderSection}
        open={isOpen}
      />
      <SidebarSection
        items={MiddleSection}
        open={isOpen}
      />
      {FooterSection.length !== 0 && (
        <SidebarSection
          items={FooterSection}
          open={isOpen}
        />
      )}
      <ProfilePerson open={isOpen} />
    </Drawer>
  );
}
