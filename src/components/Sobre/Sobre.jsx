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
              Oi! Eu sou o Caio Damasceno Alves, quase formando em Sistemas de
              Informação pela UFOP. Tenho mais de 3 anos de experiência na área
              de desenvolvimento de software e dados. Adoro resolver problemas e
              sempre estou em busca de novas soluções. Também acredito muito na
              importância de manter boas relações e trabalhar em equipe.
            </Typography>
          </Box>
        </Grid>

        {/* Coluna da foto */}
        <Grid
          item
          xs={12}
          md={2}
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
