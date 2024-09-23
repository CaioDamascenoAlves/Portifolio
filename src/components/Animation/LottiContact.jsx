import React from 'react';
import Box from '@mui/material/Box';
import Lottie from 'react-lottie-player';
import animationData from "../../assets/lottie/contact.json";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 200, height: 200 }}
        // Ajuste o framerate se necessário
        framerate={30}
      />
    </Box>
  );
};

export default React.memo(LoadingSpinner);