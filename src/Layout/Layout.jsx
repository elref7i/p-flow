import Navbar from "@/components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { useContext } from "react";
import { UserTypeContext } from "../context/UserType.context";
export default function Layout() {
  const { token } = useContext(UserTypeContext);
  const { pathname } = useLocation();

  const authPages = [
    "/login",
    "/signup",
    "/forgetpassword",
    "/updatedpassword",
    "/verifysendcoding",
    "/landing",
  ];
  return (
    <>
      <Navbar />
      {token && <Sidebar />}
      <Box
        component={"main"}
        sx={{
          m: 0,
          py: "30px",
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "background.default",
        }}
      >
        {authPages.includes(pathname) ? (
          <Outlet />
        ) : (
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        )}
      </Box>
      <Footer />
    </>
  );
}
