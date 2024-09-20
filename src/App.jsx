import React, { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";
import "./App.css";

const ThemeSwitcher = lazy(() => import("./components/Theme/ThemeSwitcher"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const CaioProfile = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/Sobre/Sobre"));
const Habilidades = lazy(() => import("./components/Skills/Skills"));
const Projetos = lazy(() => import("./components/Projects/Projects"));

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

          <section id="home">
            <CaioProfile />
          </section>
        </Box>

        <section id="sobre">
          <About />
        </section>

        <section id="habilidades">
          <Habilidades />
        </section>

        <section id="projetos">
          <Projetos />
        </section>
      </ThemeSwitcher>
    </Suspense>
  );
}

export default App;
