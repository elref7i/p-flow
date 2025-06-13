// import Navbar from '@/components/Navbar/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, useTheme } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { useTypeContext } from "../../context/UserType.context";
import { useMemo } from "react";
import Navbar from "./Navbar/Navbar";
import { useThemeContext } from "../../context/theme.context";
import ThemeToggle from "./ThemeToggle";
import NavbarPharmacy from "../PharmacyComonents/NavbarPharmacy/NavbarPharmacy";
import { useThemeConstants } from "../../lib/constants/theme.constant";

// تعريف الصفحات كمجموعات ثابتة
const CONTROL_PAGES = new Set(["admin", "inventory"]);
const PUBLIC_PAGES = new Set([
  "/login",
  "/signup",
  "/forgetpassword",
  "/updatedpassword",
  "/verifysendcoding",
  "/landing",
  "/pharmacy/home",
]);
const AUTH_PAGES = new Set([
  "/login",
  "/signup",
  "/forgetpassword",
  "/updatedpassword",
  "/verifysendcoding",
]);

export default function Layout() {
  // States
  const { token, role } = useTypeContext();

  //Theme
  const { setMode } = useThemeContext();
  const theme = useTheme();

  //Theme
  const {
    authBackground,
    adminBackground,
    pharmacyBackground,
    inventoryBackground,
    typography,
  } = useThemeConstants();
  const { pathname } = useLocation();

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem(
      "mode",
      theme.palette.mode === "dark" ? "light" : "dark"
    );
  };

  // حساب القيم المطلوبة لمرة واحدة
  const isControlPage = useMemo(() => CONTROL_PAGES.has(role), [role]);
  const isPublicPage = useMemo(() => PUBLIC_PAGES.has(pathname), [pathname]);
  const isAuthPage = useMemo(() => AUTH_PAGES.has(pathname), [pathname]);

  return (
    <>
      {/* Navbar Handling */}
      {!isAuthPage && isControlPage ? (
        <Navbar />
      ) : token && !isControlPage ? (
        <NavbarPharmacy />
      ) : null}

      {/* Sidebar for Control Pages */}
      {token && isControlPage && <Sidebar />}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          fontFamily: typography.fontFamily,
          pl: isPublicPage
            ? "0px"
            : isControlPage
            ? { xs: "60px", lg: "150px" }
            : "0px",

          pt: isPublicPage ? "0px" : isControlPage ? "80px" : "15px",
          pb: isPublicPage ? "0px" : "20px",
          minHeight: isPublicPage ? "calc(100vh - 68.01px)" : "100vh",
          background:
            role === "admin"
              ? adminBackground
              : role === "inventory"
              ? inventoryBackground
              : role === "pharmacy"
              ? pharmacyBackground
              : authBackground,
        }}
      >
        {isPublicPage ? (
          <Outlet />
        ) : (
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        )}
      </Box>

      {/*Theme Toggle */}
      <ThemeToggle toggleTheme={toggleTheme} />
      {/* Footer */}
      {/* {!isAuthPage && <Footer />} */}
    </>
  );
}
