import React, { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import "./App.css";

const ThemeSwitcher = lazy(() => import("./components/Theme/ThemeSwitcher"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const CaioProfile = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/Sobre/Sobre"));
const Habilidades = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/ContactMe"));
const LoadingWalking = lazy(() => import("./components/Animation/LottiWalking"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));

function App() {
  return (
    <Suspense fallback={<LoadingWalking />}>
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
          <Projects />
        </section>

        <section id="contato">
          <Contact />
        </section>
        <ScrollToTopButton />
      </ThemeSwitcher>
    </Suspense>
  );
}

export default App;
