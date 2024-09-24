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
  { nome: "docker-compose", imgSrc: "docker-compose.svg" },
  { nome: "Mui", imgSrc: "mui.svg" },
  { nome: "Bootstrap", imgSrc: "bootstrap.svg" },
  { nome: "Axios", imgSrc: "axios.svg" },
  { nome: "Nginx", imgSrc: "nginx.svg" },
];

const IconContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  img: {
    width: "50px",
    height: "50px",
  },
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
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    swipeToSlide: true, // Permite melhor interação no mobile
    touchThreshold: 15, // Ajusta a sensibilidade ao toque no mobile
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
                <img src={habilidade.imgSrc} alt={habilidade.nome} />
                <Typography
                  variant="caption"
                  align="center"
                  sx={{ color: theme.palette.text.primary }} // Cor responsiva ao tema
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
