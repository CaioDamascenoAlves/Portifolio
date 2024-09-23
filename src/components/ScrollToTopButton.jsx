import React from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";

const ScrollButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  transition: "all 0.3s ease",
}));

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton onClick={scrollToTop} aria-label="scroll to top">
      <KeyboardArrowUpIcon />
    </ScrollButton>
  );
};

export default ScrollToTopButton;
