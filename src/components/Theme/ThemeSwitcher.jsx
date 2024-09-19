import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MaterialUISwitch from "./MaterialUISwitch";
import { useMediaQuery } from "@mui/material";

const ThemeSwitcher = ({ children }) => {
  const [mode, setMode] = React.useState("light");
  const isMobile = useMediaQuery("(max-width:600px)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#bb86fc", // Azul para modo claro e roxo para escuro
          },
          secondary: {
            main: mode === "light" ? "#dc004e" : "#03dac6", // Vermelho para modo claro e verde para escuro
          },
          text: {
            primary: mode === "light" ? "#000" : "#fff",
            secondary: mode === "light" ? "#555" : "#ccc",
          },
          background: {
            default: mode === "light" ? "#fff" : "#121212",
          },
        },
      }),
    [mode]
  );

  const handleToggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <FormGroup
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1300,
          display: isMobile ? "block" : "flex",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <MaterialUISwitch
              checked={mode === "dark"}
              onChange={handleToggleTheme}
            />
          }
          label={mode === "light" ? "" : ""}
        />
      </FormGroup>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
