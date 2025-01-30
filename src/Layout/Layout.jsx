// import Navber from 'components/Navber/Navber';
// import Sidebar from 'components/Sidebar/Sidebar';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Calculate } from '@mui/icons-material';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Box
        component={'main'}
        sx={{ pt: '80px', minHeight: 'calc(100vh-64px)' }}
      >
        <Outlet></Outlet>
      </Box>
    </>
  );
}
