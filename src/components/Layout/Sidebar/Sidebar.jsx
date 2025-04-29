"use client";

import { Divider, useTheme, Box } from "@mui/material";
import { useThemeContext } from "@/context/theme.context";
import { Drawer, DrawerHeader } from "../../Common/Drawer";
import { admin, inventory } from "./DefaultItemes";
import { useTypeContext } from "@/context/UserType.context";
import SidebarSection from "./SidebarSection";
import ProfilePerson from "../../Common/ProfilePerson";
import Logo, { GradientLogo } from "../../Common/LogoImage";
import { useThemeConstants } from "../../../lib/constants/theme.constant";

export default function Sidebar() {
  //Contexxt
  const theme = useTheme();
  const { open, isLargeScreen } = useThemeContext();
  const { role } = useTypeContext();

  //Theme
  const { sidebarBackground, sidebarBorder, sidebarText, sidebarHeader } =
    useThemeConstants();

  const { HeaderSection, MiddleSection, FooterSection } =
    role === "admin" ? admin : inventory;

  // Force open state on large screens
  const isOpen = isLargeScreen ? true : open;

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        "& .MuiDrawer-paper": {
          bgcolor: sidebarBackground,
          borderRight: `3px solid ${sidebarBorder}`,
          width: isOpen ? 240 : 65,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
          color: sidebarText,
        },
      }}
    >
      <DrawerHeader
        sx={{
          bgcolor: sidebarHeader,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 8px",
          minHeight: "64px",
        }}
      >
        {isOpen && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo justifyContent={"center"}>
              <GradientLogo />
            </Logo>
          </Box>
        )}
      </DrawerHeader>
      <Divider
        sx={{
          backgroundColor: sidebarBorder,
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
