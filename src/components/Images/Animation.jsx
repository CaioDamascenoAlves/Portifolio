import React from "react";
import { Box, useTheme } from "@mui/material";
import Lottie from "react-lottie-player";
import animationData from "../../assets/lottie/development.json";

const LottieAnimation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
};

export default LottieAnimation;
