import Navbar from '@/components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import { useContext } from 'react';
import { UserTypeContext } from '../context/UserType.context';
export default function Layout() {
  const { token } = useContext(UserTypeContext);
  return (
    <>
      <Navbar />
      {token && <Sidebar />}
      <Box
        component={'main'}
        sx={{
          m: 0,
          pt: '100px',
          minHeight: 'calc(100vh-86.01px)',
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Outlet></Outlet>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
