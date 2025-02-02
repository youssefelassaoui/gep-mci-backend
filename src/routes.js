import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashbaord"
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon, // Add Dashboard Icon
} from "@mui/icons-material";

const routes = [
  { path: "/", name: "Home", icon: <HomeIcon />, component: Home },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon />, // Dashboard Icon
    component: Dashboard,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: <NotificationsIcon />,
    component: Notifications,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <SettingsIcon />,
    component: Settings,
  },
];

export default routes;
