import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ImageAdmin from '@/assets/photo_2024-12-03_19-37-17.jpg';
import { useThemeContext } from '@/context/theme.context';
import { Drawer, DrawerHeader } from '../Common/Drawer';
import SidebarSection from './SidebarSection';
import { admin, inventory, pharmacy, Shared } from './DefaultItemes';
import { useTypeContext } from '@/context/UserType.context';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Sidebar() {
  const theme = useTheme();
  const { open, handleDrawerClose } = useThemeContext();
  const { role, userData } = useTypeContext();

  const { HeaderSection, MiddleSection, FooterSection } =
    role === 'admin' ? admin : role === 'pharmacy' ? pharmacy : inventory;
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
      {/* <Box textAlign={'center'} marginInline={open ? 2 : 0} marginBlock={0}>
        <Avatar
          alt="Ahmed Refai"
          src={ImageAdmin}
          sx={{
            width: open ? 70 : 40,
            height: open ? 70 : 40,
            mx: 'auto',
          }}
        />
        <Typography
          variant="h2"
          fontWeight={'bold'}
          fontSize={open ? 20 : 0}
          color="primary"
          margin={1}
        >
          {userData.name}
        </Typography>
        <Typography variant="h3" fontSize={open ? 15 : 0} color="secondary">
          {role}
        </Typography>
      </Box> */}
      <Divider />
      <SidebarSection items={HeaderSection} open={open} />
      <SidebarSection items={MiddleSection} open={open} />
      {FooterSection.length !== 0 && (
        <SidebarSection items={FooterSection} open={open} />
      )}
      <SidebarSection items={Shared} open={open} />
      <Stack
        sx={{
          cursor: 'pointer',
          p: open ? 1 : 0,
          borderRadius: 2,
          ':hover': { bgcolor: theme.palette.grey[400] },
        }}
        py={2}
        direction={'row'}
        gap={open ? 2 : 0}
        alignItems={'center'}
        justifyContent={open ? 'start' : 'center'}
        textAlign={'center'}
        marginInline={open ? 2 : 0}
      >
        <Avatar
          alt={userData.name}
          src={ImageAdmin}
          sx={{
            width: open ? 50 : 40,
            height: open ? 50 : 40,
          }}
        />
        <Stack flex={1} alignItems={'start'}>
          <Typography
            textTransform={'capitalize'}
            variant="h2"
            fontWeight={'bold'}
            fontSize={open ? 15 : 0}
            color="primary"
          >
            {userData.name}
          </Typography>
          <Typography
            textTransform={'capitalize'}
            color="secondary"
            variant="h3"
            fontSize={open ? 15 : 0}
          >
            {role}
          </Typography>
        </Stack>
        {open ? <MoreHorizIcon /> : null}
      </Stack>
    </Drawer>
  );
}
