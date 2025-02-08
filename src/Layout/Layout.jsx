import Navbar from '@/components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Footer from '../components/Footer/Footer';
export default function Layout() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Box
        component={'main'}
        sx={{
          m: 0,
          pt: '100px',
          bgcolor: '#F5F6F6',
          minHeight: 'calc(100vh-86.01px)',
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
