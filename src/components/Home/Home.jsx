import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Facebook from "@mui/icons-material/Facebook";
import TypingEffect from "react-typing-effect";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "@mui/material/styles";

const ColoredTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const CodePaper = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  padding: theme.spacing(1),
  color:
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.common.white,
  fontFamily: "monospace",
  fontSize: "0.85rem",
  overflow: "hidden",
  maxWidth: "100%", // Limita a largura do componente
  border: `1px solid ${theme.palette.primary.main}`,
}));

const CaioProfile = () => {
  const theme = useTheme();

  const desenvolvedor = {
    nome: "Caio Damasceno Alves",
    habilidades: [
      "Tableau",
      "Power BI",
      "Power Query",
      "Power Automate",
      "NodeJS",
      "Express",
      "Swagger",
      "Puppeteer",
      "Jest",
      "React",
      "Mui",
      "Axios",
      "Vue",
      "Java",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Nginx",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Testes Automatizados",
    ],
    trabalhadorDedicado: true,
    aprendizadoRapido: true,
    resolvedorProblemas: true,
    contratado: function () {
      return this.trabalhadorDedicado && this.resolvedorProblemas;
    },
  };

  const codeString = `const desenvolvedor = {
    nome: '${desenvolvedor.nome}',
    habilidades: [${desenvolvedor.habilidades
      .map((habilidade) => `'${habilidade}'`)
      .join(", ")}],
    trabalhadorDedicado: ${desenvolvedor.trabalhadorDedicado},
    aprendizadoRapido: ${desenvolvedor.aprendizadoRapido},
    resolvedorProblemas: ${desenvolvedor.resolvedorProblemas},
    contratado: function() {
      return (
        this.trabalhadorDedicado &&
        this.resolvedorDeProblemas
      );
    }
  };`;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 4,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem" },
                color: "text.primary",
              }}
            >
              Olá,
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "2rem", sm: "3rem" },
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              Eu sou{" "}
              <ColoredTypography
                component="span"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem" },
                  color: "text.primary",
                }}
              >
                CAIO DAMASCENO
              </ColoredTypography>
              ,
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem" },
                color: "text.primary",
              }}
            >
              <TypingEffect
                text={[
                  "Analista de Dados",
                  "Desenvolvedor de Dados",
                  "Analista de Sistemas",
                  "Engenheiro de Dados e Sistemas",
                ]}
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={500}
                cursorRenderer={(cursor) => <>{cursor}</>}
                displayTextRenderer={(text, i) => <>{text}</>}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CodePaper elevation={6}>
              <SyntaxHighlighter
                language="javascript"
                style={
                  theme.palette.mode === "light" ? solarizedlight : dracula
                }
                wrapLongLines={true} // Não quebra linhas longas
              >
                {codeString}
              </SyntaxHighlighter>
            </CodePaper>
          </Grid>
        </Grid>

        <Box sx={{ my: 4, textAlign: "center" }}>
          <Box sx={{ mb: 4 }}>
            {[
              { Icon: GitHub, link: "https://github.com/CaioDamascenoAlves" },
              {
                Icon: LinkedIn,
                link: "https://www.linkedin.com/in/caio-alves-45684214a/",
              },
              {
                Icon: Facebook,
                link: "https://www.facebook.com/caio.alves.1840?locale=pt_BR",
              },
            ].map((item, index) => (
              <IconButton
                key={index}
                color="primary"
                sx={{ mx: 1 }}
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.Icon />
              </IconButton>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <a href="#contato">
              <Button variant="outlined" color="primary">
                ENTRE EM CONTATO
              </Button>
            </a>
            <a href="Profile.pdf" download>
              <Button variant="contained" color="primary">
                BAIXAR CURRÍCULO
              </Button>
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CaioProfile;
