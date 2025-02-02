import React from "react";
import Sidebar from "../components/Sidebar"; // Adjust the path based on your file structure
import SidebarItem from "../components/SidebarItem";
import Grid from "@mui/material/Grid";
import routes from "../routes";

export default function Notifications() {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar>
        {routes.map((route) => (
          <SidebarItem
            key={route.path}
            icon={route.icon}
            text={route.name}
            active={window.location.pathname === route.path} // Highlight active route
            alert={route.alert} // Optional alert property
          />
        ))}
      </Sidebar>

      {/* Main Content */}
      <Grid
        container
        sx={{ marginLeft: 250, padding: 2, flex: 1, overflow: "auto" }}
      >
        <h1 className="text-2xl font-bold">Notifications Page</h1>
      </Grid>
    </div>
  );
}
