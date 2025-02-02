import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { SidebarContext } from "./Sidebar";

export default function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        padding: "8px 16px",
        backgroundColor: active ? "rgba(63, 81, 181, 0.2)" : "transparent",
        borderRadius: 2,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(63, 81, 181, 0.1)",
        },
      }}
    >
      <IconButton color={active ? "primary" : "default"}>{icon}</IconButton>
      {expanded && (
        <Typography
          variant="body2"
          sx={{
            marginLeft: 2,
            flex: 1,
            color: active ? "primary.main" : "text.primary",
          }}
        >
          {text}
        </Typography>
      )}
      {alert && (
        <div
          style={{
            width: "8px",
            height: "8px",
            backgroundColor: "red",
            borderRadius: "50%",
            marginLeft: "auto",
          }}
        />
      )}
    </Grid>
  );
}
