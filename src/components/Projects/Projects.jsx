import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable";
import SwipeIcon from "@mui/icons-material/Swipe";
import { useSpring, animated } from "react-spring";

const ProjectCard = ({ project, style }) => {
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
    <animated.div style={style}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "16px 0",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: `1px solid ${theme.palette.primary.main}`,
          transition: "transform 0.5s ease-in-out",
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
          wrapLongLines={true}
        >
          {projectCode}
        </SyntaxHighlighter>
      </Box>
    </animated.div>
  );
};

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(false); // Estado para o tutorial
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < theme.breakpoints.values.md) {
        setShowSwipeHint(true);
        setTimeout(() => {
          setShowSwipeHint(false);
        }, 10000);
      }
    };
    handleResize(); // Verifica o tamanho ao carregar
    window.addEventListener("resize", handleResize); // Reage a mudanças no tamanho

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.values.md]);

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

  const handleNext = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(), // Mova para o próximo ao deslizar para a esquerda
    onSwipedRight: () => handlePrev(), // Mova para o anterior ao deslizar para a direita
  });

  const slideAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: `translateX(${direction * 100}%)` },
    reset: true,
    config: { tension: 280, friction: 60 },
  });

  return (
    <Box
      {...swipeHandlers}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
        borderTop: `1px solid ${theme.palette.divider}`,
        position: "relative",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Projetos
      </Typography>
      {/* Mostrar tutorial no mobile */}
      {showSwipeHint && (
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
            bgcolor: theme.palette.background.paper,
            padding: "8px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <SwipeIcon sx={{ mr: 1 }} />
        </Box>
      )}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Botão para anterior, visível apenas no desktop */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: { xs: "none", md: "flex" }, // Visível apenas a partir de md (desktop)
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Componente do projeto */}
        <ProjectCard
          project={projectsData[currentIndex]}
          style={slideAnimation}
        />

        {/* Botão para próximo, visível apenas no desktop */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: { xs: "none", md: "flex" }, // Visível apenas a partir de md (desktop)
            border: `1px solid ${theme.palette.primary.main}`,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {showSwipeHint && isMobile && (
        <Typography
          sx={{
            mt: 2,
            color: theme.palette.text.secondary,
            animation: "fadeInOut 3s ease-in-out",
            "@keyframes fadeInOut": {
              "0%, 100%": { opacity: 0 },
              "50%": { opacity: 1 },
            },
          }}
        >
          Deslize para ver os projetos
        </Typography>
      )}
    </Box>
  );
};

export default Projects;
