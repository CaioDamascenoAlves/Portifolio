import React, { useState } from "react";
import { Button, Modal, Box, Typography, useTheme } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";

const DownloadButton = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState(false);

  // Abrir o modal
  const handleOpen = () => setOpenModal(true);

  // Fechar o modal
  const handleClose = () => setOpenModal(false);

  // Função para download de arquivos
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
    handleClose();
  };

  return (
    <>
      {/* Botão para abrir o modal */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        onClick={handleOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.down("sm")]: { width: "100%" },
        }}
      >
        BAIXAR CURRÍCULO
      </Button>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.background.paper,
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: { xs: "80%", sm: 400 },
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.common.white
                  : theme.palette.text.primary,
            }}
          >
            Escolha o arquivo para download
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
              onClick={() =>
                handleDownload(
                  "Curriculo_Engenheiro_de_Dados___Caio_Damasceno_Alves.pdf"
                )
              }
            >
              Engenheiro e Analista de Dados (PDF)
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() =>
                handleDownload(
                  "Curriculo_Dev_Full_Stack___Caio_Damasceno_Alves.pdf"
                )
              }
            >
              Desenvolvedor Full Stack (PDF)
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DownloadButton;
