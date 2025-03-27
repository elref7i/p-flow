// import Navbar from '@/components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Sidebar from '../Layout/Sidebar/Sidebar';
import { useTypeContext } from '../../context/UserType.context';
import NavbarPharmacy from '../PharmacyComonents/DrugCard/NavbarPharmacy/NavbarPharmacy';
import { useMemo } from 'react';
import Navbar from './Navbar/Navbar';

// تعريف الصفحات كمجموعات ثابتة
const CONTROL_PAGES = new Set(['admin', 'inventory']);
const PUBLIC_PAGES = new Set([
  '/login',
  '/signup',
  '/forgetpassword',
  '/updatedpassword',
  '/verifysendcoding',
  '/landing',
]);
const AUTH_PAGES = new Set([
  '/login',
  '/signup',
  '/forgetpassword',
  '/updatedpassword',
  '/verifysendcoding',
]);

export default function Layout() {
  const { token, role } = useTypeContext();
  const { pathname } = useLocation();

  // حساب القيم المطلوبة لمرة واحدة
  const isControlPage = useMemo(() => CONTROL_PAGES.has(role), [role]);
  const isPublicPage = useMemo(() => PUBLIC_PAGES.has(pathname), [pathname]);
  const isAuthPage = useMemo(() => AUTH_PAGES.has(pathname), [pathname]);

  return (
    <>
      {/* Navbar Handling */}
      {(!isAuthPage && isControlPage) || pathname === '/landing' ? (
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
          pl: isPublicPage ? '0px' : '48px',
          pt: isPublicPage ? '0px' : '90px',
          pb: isAuthPage ? '0px' : '68.5px',
          minHeight: 'calc(100vh - 68.01px)',
          backgroundColor: 'background.default',
        }}
      >
        {isPublicPage ? (
          <Outlet />
        ) : (
          <Container maxWidth="xl">
            <Outlet />
          </Container>
        )}
      </Box>

      {/* Footer */}
      {/* {!isAuthPage && <Footer />} */}
    </>
  );
}
