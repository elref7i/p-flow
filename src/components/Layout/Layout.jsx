// import Navbar from '@/components/Navbar/Navbar';
import { Outlet, useLocation } from "react-router-dom";
import { Box, Container, useTheme } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { useTypeContext } from "../../context/UserType.context";
import { useMemo } from "react";
import Navbar from "./Navbar/Navbar";
import { useThemeContext } from "../../context/theme.context";
import ThemeToggle from "./ThemeToggle";
//!
import NavbarPharmacy from "../PharmacyComonents/NavbarPharmacy/NavbarPharmacy";

// تعريف الصفحات كمجموعات ثابتة
const CONTROL_PAGES = new Set(["admin", "inventory"]);
const PUBLIC_PAGES = new Set([
  "/login",
  "/signup",
  "/forgetpassword",
  "/updatedpassword",
  "/verifysendcoding",
  "/landing",
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
  const { setMode } = useThemeContext();
  const theme = useTheme();
  const { pathname } = useLocation();

  // Theme
  const inentory = theme.palette.background.pharmacy;

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
          pl: isPublicPage
            ? "0px"
            : isControlPage
            ? { xs: "60px", lg: "150px" }
            : "15px",

          pt: isPublicPage ? "0px" : isControlPage ? "80px" : "15px",
          // pb: isPublicPage ? "0px" : "5px",
          minHeight: isPublicPage ? "calc(100vh - 68.01px)" : "100vh",
          background: inentory,
        }}
      >
        {isPublicPage ? (
          <Outlet />
        ) : (
          <Container
            cn
            maxWidth="lg"
          >
            <Outlet />
          </Container>
        )}
      </Box>
      <ThemeToggle toggleTheme={toggleTheme} />
      {/* Footer */}
      {/* {!isAuthPage && <Footer />} */}
    </>
  );
}
