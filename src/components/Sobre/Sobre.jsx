import React from "react";
import { Grid, Typography, Box, Avatar, useTheme } from "@mui/material";

const About = () => {
  // Usando o hook useTheme para acessar o tema atual
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Grid container spacing={4}>
        {/* Coluna do texto, alinhada com o componente anterior */}
        <Grid
          item
          xs={12}
          md={7.5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "100%", maxWidth: 600 }}>
            {" "}
            {/* Limite de largura */}
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ color: theme.palette.text.primary }}
            >
              Sobre mim
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: theme.palette.text.secondary }}
            >
              Olá! Sou Caio Damasceno Alves, quase bacharel em Sistemas de
              Informação pela UFOP. Com mais de 3 anos de experiência em
              desenvolvimento de software e dados, foco em resolver problemas e
              vejo cada desafio como uma oportunidade de crescimento rumo à
              senioridade. Também valorizo o trabalho em equipe e boas relações,
              que considero essenciais para o sucesso em qualquer projeto.
            </Typography>
          </Box>
        </Grid>

        {/* Coluna da foto */}
        <Grid
          item
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            alt="Caio Damasceno Alves"
            src="file.png"
            sx={{
              width: 200,
              height: 200,
              border: `4px solid ${theme.palette.primary.main}`,
              borderRadius: "16px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
