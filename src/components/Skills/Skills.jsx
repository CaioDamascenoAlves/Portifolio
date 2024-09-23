import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";

const habilidades = [
  { nome: "Tableau", imgSrc: "tableau.svg" },
  { nome: "Power BI", imgSrc: "powerbi.svg" },
  { nome: "Python", imgSrc: "python.svg" },
  { nome: "NodeJS", imgSrc: "nodejs.svg" },
  { nome: "Docker", imgSrc: "docker.svg" },
  { nome: "GitHub Actions", imgSrc: "cicd.svg" },
  { nome: "PostgreSQL", imgSrc: "postgre.svg" },
  { nome: "MongoDB", imgSrc: "mongodb.svg" },
  { nome: "Puppeteer", imgSrc: "puppeteer.svg" },
  { nome: "Jest", imgSrc: "jest.svg" },
  { nome: "React", imgSrc: "react.svg" },
  { nome: "Power Automate", imgSrc: "pwauto.svg" },
  { nome: "Vue", imgSrc: "vue.svg" },
  { nome: "Express", imgSrc: "express.svg" },
  { nome: "Swagger", imgSrc: "swagger.svg" },
  { nome: "Mui", imgSrc: "mui.svg" },
  { nome: "Bootstrap", imgSrc: "bootstrap.svg" },
  { nome: "Axios", imgSrc: "axios.svg" },
  { nome: "Nginx", imgSrc: "nginx.svg" },
];

// Caixa responsiva ao tema para "envelopar" o ícone
const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80px", // Ajuste conforme necessário
  height: "80px",
  borderRadius: "10px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "10px",
  transition: "all 0.3s ease",
  "& img": {
    width: "50px", // Definição de tamanho do ícone SVG
    height: "50px",
    objectFit: "contain", // Garante que o SVG não ultrapasse os limites
  },
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
}));

const IconContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledSlider = styled(Slider)(({ theme }) => ({
  "& .slick-track": {
    display: "flex",
    alignItems: "center",
  },
  "& .slick-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Habilidades = () => {
  const theme = useTheme();
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
        setTimeout(() => {
          sliderRef.current.slickPlay();
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: theme.palette.text.primary, marginTop: 4 }}
        >
          Habilidades
        </Typography>

        <Box sx={{ width: "100%", overflow: "hidden", py: 4 }}>
          <StyledSlider ref={sliderRef} {...settings}>
            {habilidades.map((habilidade, index) => (
              <IconContainer key={index}>
                <IconWrapper>
                  <img src={habilidade.imgSrc} alt={habilidade.nome} />
                </IconWrapper>
                <Typography
                  variant="caption"
                  align="center"
                  sx={{
                    color: theme.palette.text.primary,
                    marginTop: 1
                  }}
                >
                  {habilidade.nome}
                </Typography>
              </IconContainer>
            ))}
          </StyledSlider>
        </Box>
      </Container>
    </Box>
  );
};

export default Habilidades;
