import Navbar from '@/components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { useTypeContext } from '../context/UserType.context';
export default function Layout() {
  const { token } = useTypeContext();
  const { pathname } = useLocation();

  const authPages = [
    '/login',
    '/signup',
    '/forgetpassword',
    '/updatedpassword',
    '/verifysendcoding',
    '/landing',
  ];
  const onlyAuth = [
    '/login',
    '/signup',
    '/forgetpassword',
    '/updatedpassword',
    '/verifysendcoding',
  ];

  return (
    <>
      {!onlyAuth.includes(pathname) && <Navbar />}
      {token && <Sidebar />}
      <Box
        component={'main'}
        sx={{
          pl: authPages.includes(pathname) ? '0px' : '48px',
          pt: onlyAuth.includes(pathname) ? '0px' : '90px',
          paddingBottom: onlyAuth.includes(pathname) ? '0px' : '68.5px',
          minHeight: 'calc(100vh - 68.01px)',
          backgroundColor: 'background.default',
        }}
      >
        {authPages.includes(pathname) ? (
          <Outlet />
        ) : (
          <Container maxWidth="xl">
            <Outlet />
          </Container>
        )}
      </Box>

      {!onlyAuth.includes(pathname) && <Footer />}
    </>
  );
}
