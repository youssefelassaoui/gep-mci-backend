import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import WarningIcon from "@mui/icons-material/Warning";

const NavItem = styled(Typography)(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  textDecoration: "none",
  fontSize: "0.75rem",
  lineHeight: "4rem",
  color: selected ? "#2D3748" : "#4A5568",
  borderBottom: selected ? "2px solid #2D3748" : "none",
  "&:hover": {
    color: "#2D3748",
  },
  cursor: "pointer",
}));

export default function ToolbarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#ffff" }}>
        <Toolbar>
          {/* Menu Icon for Drawer */}
          <IconButton
            edge="start"
            sx={{ color: "black" }}
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Centered Nav Items */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <NavItem
              component={Link}
              to="/overview"
              selected={location.pathname === "/overview"}
            >
              <HomeIcon sx={{ fontSize: "1.2rem" }} />
              OVERVIEW
            </NavItem>
            <NavItem
              component={Link}
              to="/dashboard"
              selected={location.pathname === "/dashboard"}
            >
              <DashboardIcon sx={{ fontSize: "1.2rem" }} />
              DASHBOARD
            </NavItem>
            <NavItem
              component={Link}
              to="/pv-systems"
              selected={location.pathname === "/pv-systems"}
            >
              <SolarPowerIcon sx={{ fontSize: "1.2rem" }} />
              PV SYSTEMS
            </NavItem>
            <NavItem
              component={Link}
              to="/"
              selected={location.pathname === "/"}
            >
              <CloudIcon sx={{ fontSize: "1.2rem" }} />
              WEATHER STATION
            </NavItem>
            <NavItem
              component={Link}
              to="/alarms"
              selected={location.pathname === "/alarms"}
            >
              <WarningIcon sx={{ fontSize: "1.2rem" }} />
              ALARMS
            </NavItem>
          </Box>

          {/* User Icon */}
          <IconButton edge="end" sx={{ color: "black" }} aria-label="user">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 250, boxShadow: "5px 0 15px rgba(0,0,0,0.2)" },
        }}
      >
        <Box
          sx={{ width: 250, height: "100%", bgcolor: "background.paper" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {["Inbox", "Starred", "Drafts"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
