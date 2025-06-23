import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CategoryIcon from "@mui/icons-material/Category";

const Shared = { text: "Setting", icon: <SettingsIcon />, path: "/setting" };
export const admin = {
  HeaderSection: [
    { text: "Dashboard", icon: <HomeIcon />, path: "/admin" },
    { text: "Users", icon: <GroupIcon />, path: "/admin/users" },
  ],
  MiddleSection: [
    {
      text: "Users Actions",
      icon: <GroupAddIcon />,
      path: "/admin/usersaction",
    },
    {
      text: "Categories",
      icon: <CategoryIcon />,
      path: "/admin/categories_admin",
    },
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
    { text: "Orders", icon: <AddTaskIcon />, path: "/inventory/orders" },
  ],
  FooterSection: [
    { text: "Profile", icon: <PersonIcon />, path: "/inventory/myprofile" },
    Shared,
  ],
};
