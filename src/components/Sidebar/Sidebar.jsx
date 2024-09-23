import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
// Importando ícones específicos
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const iconStyle = { color: theme.palette.text.primary }; // Responsividade do tema

  const DrawerList = (
    <Box
      sx={{ width: 180, paddingTop: 8 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("home")}>
            <ListItemIcon>
              <HomeIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("sobre")}>
            <ListItemIcon>
              <InfoIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("habilidades")}>
            <ListItemIcon>
              <BuildIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Habilidades" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("projetos")}>
            <ListItemIcon>
              <WorkIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Projetos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection("contato")}>
            <ListItemIcon>
              <ContactMailIcon sx={iconStyle} />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="primary"
        aria-label="menu"
        sx={{ position: "fixed", top: 16, left: 16, zIndex: 1201 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
