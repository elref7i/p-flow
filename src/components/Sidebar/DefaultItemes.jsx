import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
export const admin = {
  HeaderSection: [
    { text: 'Dashboard', icon: <HomeIcon />, path: '/admin' },
    { text: 'Users', icon: <GroupIcon />, path: '/admin/users' },
    {
      text: 'Add User',
      icon: <PersonAddIcon />,
      path: '/admin/adduser',
    },
  ],
  MiddleSection: [
    { text: 'Invoices', icon: <ArticleIcon />, path: '/invoices' },
    { text: 'Profile Form', icon: <PersonIcon />, path: '/profile' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
    { text: 'FAQ Page', icon: <HelpOutlineIcon />, path: '/faq' },
  ],
  FooterSection: [
    { text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar' },
    { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
    { text: 'Line Chart', icon: <TimelineIcon />, path: '/line' },
    { text: 'Geography Chart', icon: <MapIcon />, path: '/geography' },
  ],
};

export const pharmacy = {
  HeaderSection: [
    { text: 'Dashboard', icon: <HomeIcon />, path: '/' },
    { text: 'Orders', icon: <ArticleIcon />, path: '/orders' },
  ],
  MiddleSection: [
    { text: 'Invoices', icon: <ArticleIcon />, path: '/invoices' },
    { text: 'Profile Form', icon: <PersonIcon />, path: '/profile' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
    { text: 'FAQ Page', icon: <HelpOutlineIcon />, path: '/faq' },
  ],
  FooterSection: [
    { text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar' },
    { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
    { text: 'Line Chart', icon: <TimelineIcon />, path: '/line' },
    { text: 'Geography Chart', icon: <MapIcon />, path: '/geography' },
  ],
};
export const inventory = {
  HeaderSection: [
    { text: 'Dashboard', icon: <HomeIcon />, path: '/inventory' },
    { text: 'Add Drugs', icon: <BarChartIcon />, path: '/inventory/adddrugs' },
  ],
  MiddleSection: [
    { text: 'Invoices', icon: <ArticleIcon />, path: '/invoices' },
    { text: 'Profile Form', icon: <PersonIcon />, path: '/profile' },
    { text: 'Calendar', icon: <CalendarTodayIcon />, path: '/calendar' },
    { text: 'FAQ Page', icon: <HelpOutlineIcon />, path: '/faq' },
  ],
  FooterSection: [
    { text: 'Bar Chart', icon: <BarChartIcon />, path: '/bar' },
    { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
    { text: 'Line Chart', icon: <TimelineIcon />, path: '/line' },
    { text: 'Geography Chart', icon: <MapIcon />, path: '/geography' },
  ],
};
