import React, { Suspense, lazy, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const ThemeSwitcher = lazy(() => import("./components/Theme/ThemeSwitcher"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const CaioProfile = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/Sobre/Sobre"));
const Habilidades = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/ContactMe"));
const LoadingWalking = lazy(() =>
  import("./components/Animation/LottiWalking")
);
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const ExperienceCard = lazy(() => import("./components/Jobs/ExperienceCard"));
const LottiCode = lazy(() => import("./components/Animation/LottiCode")); // Componente da animação

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const sectionBottom = homeSection.getBoundingClientRect().bottom;

    // Exibe o botão se o topo da seção Home estiver acima da tela
    if (sectionBottom < 0) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Suspense fallback={<LoadingWalking />}>
      <ThemeSwitcher>
        <Router basename="/">
          <Routes>
            {/* Rota principal do portfólio */}
            <Route
              path="/"
              element={
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
                  <section id="sobre">
                    <About />
                  </section>
                  <section id="habilidades">
                    <Habilidades />
                  </section>
                  <section id="projetos">
                    <Projects />
                  </section>
                  <section id="experiencias">
                    <ExperienceCard />
                  </section>
                  <section id="contato">
                    <Contact />
                  </section>

                  {showScrollButton && <ScrollToTopButton />}
                </Box>
              }
            />
            {/* Nova rota para a animação */}
            <Route path="/animacao" element={<LottiCode />} />
          </Routes>
        </Router>
      </ThemeSwitcher>
    </Suspense>
  );
}

export default App;
