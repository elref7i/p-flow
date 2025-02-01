import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Box
        component={'main'}
        sx={{
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
