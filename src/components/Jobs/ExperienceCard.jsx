import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Lubrificantes Longana",
    position:
      "Estagiário em Analise de Dados BI e Desenvolvimento Full Stack Nodejs e Python",
    duration: "Janeiro de 2024 - Atualmente (9 meses)",
  },
  {
    company: "Rg Pneus Pirelli",
    position: "Estagio em Analise de Dados BI",
    duration: "Dezembro de 2021 - dezembro de 2023 (2 anos)",
  },
  {
    company: "Valenet",
    position: "Suporte ao Cliente",
    duration: "Janeiro de 2021 - março de 2021 (3 meses)",
  },
  {
    company: "Grupo Belmont",
    position: "Auxiliar Administrativo",
    duration: "Janeiro de 2017 - agosto de 2018 (1 ano e 6 meses)",
  },
];

const ExperienceCard = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll para baixo
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % experiences.length;
        return nextIndex;
      });
    } else {
      // Scroll para cima
      setCurrentIndex((prev) => {
        const newIndex = (prev - 1 + experiences.length) % experiences.length;
        return newIndex;
      });
    }
  };

  useEffect(() => {
    const currentCard = cardRef.current;

    const handleWheel = (event) => {
      event.preventDefault(); // Evita o comportamento padrão do scroll
      handleScroll(event);
    };

    currentCard.addEventListener("wheel", handleWheel);
    return () => {
      currentCard.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        p: 2,
        backgroundColor: theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
      ref={cardRef}
    >
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.primary,
          mb: 3,
        }}
      >
        Experiências
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 600 }}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[3],
              borderRadius: "12px",
              border: `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Chip
                  label={experiences[currentIndex].company}
                  sx={{
                    alignSelf: "start",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: "bold",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.text.primary }}
                >
                  {experiences[currentIndex].position}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {experiences[currentIndex].duration}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ExperienceCard;
