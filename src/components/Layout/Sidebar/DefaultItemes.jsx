import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import AddTaskIcon from "@mui/icons-material/AddTask";
const Shared = { text: "Setting", icon: <SettingsIcon />, path: "/setting" };
export const admin = {
  HeaderSection: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/admin" },
    { text: "Users", icon: <GroupIcon />, path: "/admin/users" },

    {
      text: "Users Actions",
      icon: <GroupAddIcon />,
      path: "/admin/usersaction",
    },
  ],
  MiddleSection: [
    { text: "Invoices", icon: <ArticleIcon />, path: "/invoices" },
    { text: "Profile Form", icon: <PersonIcon />, path: "/profile" },
    { text: "Calendar", icon: <CalendarTodayIcon />, path: "/calendar" },
    { text: "FAQ Page", icon: <HelpOutlineIcon />, path: "/faq" },
  ],
  FooterSection: [
    // { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
    // { text: 'Line Chart', icon: <TimelineIcon />, path: '/line' },
    // { text: 'Geography Chart', icon: <MapIcon />, path: '/geography' },
  ],
};

export const inventory = {
  HeaderSection: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/inventory" },
    { text: "All Drugs", icon: <BarChartIcon />, path: "/inventory/AllDrugs" },
  ],
  MiddleSection: [
    {
      text: "Drugs Action",
      icon: <ArticleIcon />,
      path: "/inventory/DrugsAction",
    },
    { text: "Profile", icon: <PersonIcon />, path: "/inventory/myprofile" },
    { text: "Orders", icon: <AddTaskIcon />, path: "/inventory/orders" },
  ],
  FooterSection: [
    { text: "Bar Chart", icon: <BarChartIcon />, path: "/bar" },
    // { text: 'Pie Chart', icon: <PieChartIcon />, path: '/pie' },
    // { text: 'Line Chart', icon: <TimelineIcon />, path: '/line' },
    // { text: 'Geography Chart', icon: <MapIcon />, path: '/geography' },
    Shared,
  ],
};
