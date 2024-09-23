import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Modal,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoadingSpinner from "../Loading/LottiContact" // Componente do spinner

const ContactMe = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [spinnerOpen, setSpinnerOpen] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSpinnerOpen(true); // Abrir o spinner
    setTimeElapsed(false); // Resetar o timer

    const form = e.target;
    const data = new FormData(form);

    // Simula um atraso de pelo menos 3 segundos para exibir o spinner
    setTimeout(() => setTimeElapsed(true), 3000);

    try {
      const response = await fetch("https://formspree.io/f/xpwagyad", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setTimeout(() => {
        setLoading(false); // Aguarde o tempo mínimo
        setSpinnerOpen(false); // Fechar o spinner
        setModalOpen(true); // Exibir o modal após o loading
      }, 3000);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(4),
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contate-me
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome"
              variant="outlined"
              margin="normal"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              sx={{
                backgroundColor: theme.palette.background.paper,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Telefone"
              variant="outlined"
              margin="normal"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              sx={{
                backgroundColor: theme.palette.background.paper,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              sx={{
                backgroundColor: theme.palette.background.paper,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
              margin="normal"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              sx={{
                backgroundColor: theme.palette.background.paper,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Enviar
            </Button>
          </form>
        </Grid>

        {/* Dados de contato */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Meus dados de contato
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton>
                <PhoneIcon color="primary" />
              </IconButton>
              <Typography variant="body1" sx={{ ml: 2 }}>
                <strong>Telefone/WhatsApp:</strong> +55 (31) 98949-4350
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton>
                <EmailIcon color="primary" />
              </IconButton>
              <Typography variant="body1" sx={{ ml: 2 }}>
                <strong>Email:</strong> caiodalves97@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton>
                <LocationOnIcon color="primary" />
              </IconButton>
              <Typography variant="body1" sx={{ ml: 2 }}>
                <strong>Endereço:</strong> Rua Angelina Ponce Martins, 57, Ap
                101, Minas Gerais, Brasil.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Modal do LoadingSpinner */}
      <Modal open={spinnerOpen} onClose={() => setSpinnerOpen(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <LoadingSpinner />
        </Box>
      </Modal>

      {/* Modal de confirmação */}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
          }}
        >
          {status === "SUCCESS" ? (
            <Typography sx={{ color: "green" }}>
              Mensagem enviada com sucesso!
            </Typography>
          ) : (
            <Typography sx={{ color: "red" }}>
              Ocorreu um erro ao enviar a mensagem.
            </Typography>
          )}
          <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactMe;
