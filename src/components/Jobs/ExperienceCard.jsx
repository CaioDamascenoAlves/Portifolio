import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  useTheme,
} from "@mui/material";

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

      {experiences.map((exp, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            maxWidth: 600,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            borderRadius: "12px",
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Chip
                label={exp.company}
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
                {exp.position}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {exp.duration}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ExperienceCard;
