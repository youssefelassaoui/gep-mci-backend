import React, { useState, createContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import { Sun, Settings, ChevronLast, ChevronFirst } from "lucide-react";

export const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true); // State for sidebar expansion

  // Menu items
  const menuItems = [
    { name: "Weather Section", icon: <Sun size={24} /> },
    { name: "Settings", icon: <Settings size={24} /> },
  ];

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <Card
        sx={{
          height: "100vh",
          width: expanded ? 250 : 80, // Adjust width dynamically
          display: "flex",
          flexDirection: "column",
          boxShadow: 1,
          borderRadius: 0,
          overflow: "hidden",
          transition: "width 0.3s ease",
          zIndex: 1200,
          backgroundColor: "white",
        }}
      >
        {/* Header */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "16px" }}
        >
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            alt="Logo"
            style={{
              width: expanded ? "120px" : "0",
              overflow: "hidden",
              transition: "width 0.3s ease",
            }}
          /> */}
          <IconButton
            onClick={() => setExpanded((curr) => !curr)} // Toggle expanded state
            sx={{
              transition: "transform 0.3s ease",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </IconButton>
        </Grid>

        {/* Menu Items */}
        <Grid
          container
          direction="column"
          sx={{
            flex: 1,
            padding: expanded ? "16px" : "8px",
            gap: 2,
            alignItems: expanded ? "flex-start" : "center",
            justifyContent: "flex-start",
          }}
        >
          {menuItems.map((item) => (
            <Tooltip
              key={item.name}
              title={!expanded ? item.name : ""}
              placement="right"
            >
              <IconButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: expanded ? "flex-start" : "center",
                  width: "100%",
                  padding: "10px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(37, 122, 179, 0.1)", // Soft violet hover effect
                    borderRadius: "0", // Square hover effect
                  },
                }}
              >
                {item.icon}
                {expanded && (
                  <span
                    style={{
                      fontSize: "14px",
                      color: "inherit",
                    }}
                  >
                    {item.name}
                  </span>
                )}
              </IconButton>
            </Tooltip>
          ))}
        </Grid>

        {/* Footer */}
        <Divider />
        <Grid
          container
          alignItems="center"
          justifyContent={expanded ? "space-between" : "center"}
          sx={{
            padding: "16px",
          }}
        >
          <IconButton>
            <Settings size={24} />
          </IconButton>
        </Grid>
      </Card>
    </SidebarContext.Provider>
  );
}
