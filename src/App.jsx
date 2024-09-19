import React, { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";
import "./App.css";

const ThemeSwitcher = lazy(() => import("./components/Theme/ThemeSwitcher"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const CaioProfile = lazy(() => import("./components/Sobre/Sobre"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ThemeSwitcher>
        <Box
          sx={{
            bgcolor: "background.default",
            minHeight: "100vh",
            color: "text.primary",
          }}
        >
          <Sidebar />
          <CaioProfile />
        </Box>
      </ThemeSwitcher>
    </Suspense>
  );
}

export default App;
