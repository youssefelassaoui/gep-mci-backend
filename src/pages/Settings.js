import React, { useState } from "react";
import SvgIcon from "../components/SvgIcon";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";

export default function Settings() {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const [isMoroccoVisible, setIsMoroccoVisible] = useState(false);

  const handleMoroccoClick = () => {
    setIsMoroccoVisible(true); // Show only Morocco when clicked
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        overflow: "hidden", // Prevent scrolling
        // backgroundImage: `url('/layered-waves-haikei.png')`, // Background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Stepper Component */}
      <Box
        sx={{
          width: "20%",
          marginRight: "40px",
          //   backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional background for contrast
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Guided Steps
        </Typography>
        <Stepper orientation="vertical" activeStep={1}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <SvgIcon
          isMoroccoVisible={isMoroccoVisible}
          onMoroccoClick={handleMoroccoClick}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
}
