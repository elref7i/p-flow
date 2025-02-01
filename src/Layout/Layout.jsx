import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import bgGround from '../assets/circle-scatter-haikei (1).png';
export default function Layout() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Box
        component={'main'}
        sx={{
          backgroundImage: `url(${bgGround})`,
          backgroundSize: 'cover', // تغطية الخلفية بالكامل
          backgroundPosition: 'center', // توسيط الخلفية
          backgroundRepeat: 'no-repeat',
          m: 0,
          pt: '80px',
          minHeight: 'calc(100vh)',
        }}
      >
        <Outlet></Outlet>
      </Box>
    </>
  );
}
