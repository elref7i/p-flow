import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';
import { useThemeContext } from '../../context/theme.context';
import { Drawer, DrawerHeader } from '../Common/Drawer';
import SidebarSection from './SidebarSection';
import { admin } from './DefaultItemes';

const { HeaderSection, MiddleSection, FooterSection } = admin;

export default function Sidebar() {
  const theme = useTheme();
  const { open, handleDrawerClose } = useThemeContext();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Box textAlign={'center'} marginInline={open ? 2 : 0} marginBlock={2}>
        <Avatar
          alt="Ahmed Refai"
          src={ImageAdmin}
          sx={{
            width: open ? 70 : 40,
            height: open ? 70 : 40,
            mx: 'auto',
            my: 2,
          }}
        />
        <Typography
          variant="h2"
          fontWeight={'bold'}
          fontSize={open ? 20 : 0}
          color="primary"
          margin={1}
        >
          Ahmed Refai
        </Typography>
        <Typography variant="h3" fontSize={open ? 15 : 0} color="secondary">
          Admin
        </Typography>
      </Box>
      <Divider />
      <SidebarSection items={HeaderSection} open={open} />
      <SidebarSection items={MiddleSection} open={open} />
      <SidebarSection items={FooterSection} open={open} />
    </Drawer>
  );
}
