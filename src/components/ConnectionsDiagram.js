import React from "react";
import { Box } from "@mui/material";
import { Home, Battery, Plug, CloudSun } from "lucide-react";
import "../css/ConnectionsDiagram.css"; // CSS file for lines design
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import { BatteryCharging, HousePlug } from "lucide-react";

const ConnectionsDiagram = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
        width: "100%",
        maxWidth: "900px",
        height: "350px",
        margin: "16px auto",
      }}
    >
      {/* Left Icon */}
      <Box
        sx={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80px",
          height: "80px",
          backgroundColor: "#77B254",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <SolarPowerIcon size={40} />
      </Box>

      {/* Right Icons */}
      <Box
        sx={{
          position: "absolute",
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* Icon 1 */}
        <Box
          sx={{
            width: "80px",
            height: "80px",
            backgroundColor: "#77B254",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <HousePlug size={36} />
        </Box>

        {/* Icon 2 */}
        <Box
          sx={{
            width: "80px",
            height: "80px",
            backgroundColor: "#77B254",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <BatteryCharging size={36} />
        </Box>

        {/* Icon 3 */}
        <Box
          sx={{
            width: "80px",
            height: "80px",
            backgroundColor: "#77B254",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/power_grid.png" alt="Power Grid" width={46} height={46} />
        </Box>
      </Box>

      {/* Lines */}
      <div className="connections">
        <div className="line left-to-center"></div>
        <div className="line center-to-top"></div>
        <div className="line center-to-middle"></div>
        <div className="line center-to-bottom"></div>

        {/* Static Black Points */}
        <div className="point point-left"></div>
        <div className="point point-center"></div>
        <div className="point point-top"></div>
        <div className="point point-bottom"></div>
        <div className="point point-right"></div>

        {/* Animated Flux Points */}
        <div className="flux-point"></div>
        <div className="flux-point-top"></div>
        <div className="flux-point-middle"></div>
        <div className="flux-point-bottom"></div>
      </div>
    </Box>
  );
};

export default ConnectionsDiagram;
