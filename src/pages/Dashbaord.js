import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Sun, BatteryCharging, Leaf, Zap, Cloud, House } from "lucide-react";
import ConnectionsDiagram from "../components/ConnectionsDiagram";
export default function Dashboard() {
  const parameters = [
    {
      title: "PV Capacity",
      value: "200 kWc",
      icon: <Sun size={30} color="#77B254" />,
    },
    {
      title: "Σ PV Production",
      value: "1.31 GWh",
      icon: <Zap size={30} color="#77B254" />,
    },
    {
      title: "CO2 Savings",
      value: "0.62 Tonnes",
      icon: <Leaf size={30} color="#77B254" />,
    },
    {
      title: "Battery Capacity",
      value: "100 kWh",
      icon: <BatteryCharging size={30} color="#77B254" />,
    },
    {
      title: "Battery SOC",
      value: "3.00 %",
      icon: <BatteryCharging size={30} color="#77B254" />,
    },
    {
      title: "Stored Energy",
      value: "8.60 MWh",
      icon: <Zap size={30} color="#77B254" />,
    },
    {
      title: "Grid Withdraw",
      value: "0.27 GWh",
      icon: <Cloud size={30} color="#77B254" />,
    },
    {
      title: "E Consumption",
      value: "1.43 GWh",
      icon: <House size={30} color="#77B254" />,
    },
  ];

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F5F7F8",
        minHeight: "100vh", // Full page height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 3,
      }}
    >
      {/* Metrics Row */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        {parameters.map((param, index) => (
          <Grid item xs={12} sm={6} md={1.3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                padding: 1,
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#fff",
                height: "100px", // Smaller card height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Evenly distribute content vertically
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{
                  fontSize: "0.8rem",
                  marginTop: "5px",
                  marginBottom: "5px",
                }} // Title spacing
              >
                {param.title}
              </Typography>
              <div style={{ marginBottom: "5px" }}>{param.icon}</div>{" "}
              {/* Icon with spacing */}
              <Typography
                variant="body1"
                sx={{ color: "#333", fontSize: "0.9rem", marginTop: "5px" }} // Value spacing
              >
                {param.value}
              </Typography>
            </Card>
          </Grid>
        ))}
         <Grid item xs={12} sx={{ marginTop: 3 }}>
        <ConnectionsDiagram />
      </Grid>
      </Grid>
    </Grid>
  );
}
