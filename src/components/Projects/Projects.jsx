import React, { useState } from "react";
import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable";

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
        margin: "16px 0",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: `1px solid ${theme.palette.primary.main}`,
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
    {
      name: "Projeto de DataWareHouse para Analise de Combustiveis",
      tools: [
        "Tableau",
        "Postgres",
        "NodeJS",
        "Express",
        "Swagger",
        "Query Strem",
        "Puppeteer",
        "Cron",
      ],
      myRole: "Desenvolvimento Backend",
      Description:
        "Estruturação de um Pipeline de Dados para coleta de dados de combustíveis e criação de DW para analise de dados.",
    },
    {
      name: "KPIs de Combustiveis",
      tools: ["Tableau", "PostgreSQL"],
      myRole: "Analise e Desenvolvimento de BI",
      Description:
        "Consumo do DataWareHouse para criação de KPIs de combustíveis em Tableau",
    },
    {
      name: "KPI de Meta de Vendas Mensais | RG Pneus",
      tools: ["Tableau", "Excel", "Microsoft SQL Server"],
      myRole: "Analise e Desenvolvimento de BI",
      Description:
        "Junção de Base de Dados de Vendas e Metas de Vendas em Excel para criação de painel de metas de vendas mensais.",
    },
    {
      name: "KPI de Meta de Vendas Mensais | Lubrificantes Longana",
      tools: ["Tableau", "Excel", "Microsoft SQL Server"],
      myRole: "Analise e Desenvolvimento de BI",
      Description:
        "Junção de Base de Dados de Vendas e Metas de Vendas em Excel para criação de painel de metas de vendas mensais.",
    },
    {
      name: "Painel de RH",
      tools: ["Tableau", "Excel", "Microsoft SQL Server"],
      myRole: "Analise e Desenvolvimento de BI",
      Description:
        "Criação de painel de RH para acompanhamento de indicadores de RH.",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentProject(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        position: "relative", // para as setas
      }}
      {...handlers}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Projetos
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ProjectCard project={projectsData[currentProject]} />
      </Box>

      {/* Setas para desktop */}
      <IconButton
        sx={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handlePrevious}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Projects;
