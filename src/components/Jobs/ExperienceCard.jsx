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
    duration: "janeiro de 2024 - Present (9 meses)",
  },
  {
    company: "RG PNEUS PIRELLI",
    position: "Estagio em Analise de Dados BI",
    duration: "dezembro de 2021 - abril de 2024 (2 anos 5 meses)",
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
