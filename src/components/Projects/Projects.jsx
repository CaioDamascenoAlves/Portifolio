import React from "react";
import { Box, useTheme } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const customStyle = {
    ...(isDarkMode ? dracula : solarizedlight),
    'pre[class*="language-"]': {
      ...(isDarkMode ? dracula : solarizedlight)['pre[class*="language-"]'],
      background: isDarkMode ? "#0d1117" : "#f6f8fa",
      margin: 0,
      padding: "16px",
      borderRadius: "0 0 8px 8px",
    },
  };

  const projectCode = `const Projeto = {
  Nome: '${project.name}',
  Ferramentas: [${project.tools.map((tool) => `'${tool}'`).join(", ")}],
  Função: '${project.myRole}',
  Descrição: \`${project.Description}\`
};`;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          backgroundColor: isDarkMode ? "#1e1e1e" : "#f1f1f1",
          padding: "8px 16px",
          borderBottom: `1px solid ${isDarkMode ? "#30363d" : "#e1e4e8"}`,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
            marginRight: "6px",
          }}
        />
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
            marginRight: "6px",
          }}
        />
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#27c93f",
            marginRight: "16px",
          }}
        />
        <Box
          component="span"
          sx={{
            color: isDarkMode ? "#4fd1c5" : "#0366d6",
            fontFamily: "monospace",
            fontSize: "14px",
          }}
        >
          {project.name}
        </Box>
      </Box>
      <SyntaxHighlighter
        language="javascript"
        style={customStyle}
        customStyle={{
          fontSize: "14px",
          lineHeight: "1.5",
        }}
        wrapLongLines={true}
      >
        {projectCode}
      </SyntaxHighlighter>
    </Box>
  );
};

const Projects = () => {
  const theme = useTheme();
  const projectsData = [
    {
      name: "Sistema Web para Coleta de Preços de Combustiveis Publicos",
      tools: [
        "Express",
        "PostgreSQL",
        "Swagger",
        "Query Stream PG",
        "Cron",
        "Node Mailer",
        "Morgan",
        "Puppeteer",
        "Nginx",
        "Docker",
        "Jest",
        "React",
        "Bootstrap",
        "Axios",
        "React Router",
      ],
      myRole: "Desenvolvimento Full Stack",
      Description:
        "Desenvolvimento de um sistema web para coleta de preços de combustíveis públicos. E Scraping de dados de site de venda de combustíveis.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "80vh",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
        }}
      >
        Projetos
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
