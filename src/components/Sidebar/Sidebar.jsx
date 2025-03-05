import { Divider, IconButton, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useThemeContext } from '@/context/theme.context';
import { Drawer, DrawerHeader } from '../Common/Drawer';
import SidebarSection from './SidebarSection';
import { admin, inventory, pharmacy } from './DefaultItemes';
import { useTypeContext } from '@/context/UserType.context';
import ProfilePerson from '../Common/ProfilePerson';

export default function Sidebar() {
  const theme = useTheme();
  const { open, handleDrawerClose } = useThemeContext();
  const { role } = useTypeContext();
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
      <Divider />
      <SidebarSection items={HeaderSection} open={open} />
      <SidebarSection items={MiddleSection} open={open} />
      {FooterSection.length !== 0 && (
        <SidebarSection items={FooterSection} open={open} />
      )}
      <ProfilePerson open={open} />
    </Drawer>
  );
}
