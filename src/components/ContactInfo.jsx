import { useState, useEffect } from "react";
import { Box, IconButton, Snackbar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = () => {
  const [copied, setCopied] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopyClick = () => {
    const textToCopy = "jaristizabals@unal.edu.co";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
  };

  const handleSnackbarClose = () => {
    setCopied(false);
  };

  const isMobile = () => {
    return screenSize && screenSize <= 768;
  };

  const handleEmailClick = () => {
    if (isMobile()) {
      window.location.href = "mailto:jaristizabals@unal.edu.co";
    } else {
      handleCopyClick();
    }
  };

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      height="10rem"
    >
      <IconButton href="https://twitter.com/je_aristizabal" target="_blank">
        <TwitterIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/juan-esteban-aristizabal-salazar/"
        target="_blank"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://scholar.google.com/citations?user=zetwXcYAAAAJ&hl=es&oi=sra"
        target="_blank"
      >
        <SchoolIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={handleEmailClick}>
        <EmailIcon fontSize="large"/>
      </IconButton>
      <Snackbar
        open={copied}
        message="Correo copiado al portapapeles"
        onClose={handleSnackbarClose}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',

        }}
      />
    </Box>
  );
};

export default ContactInfo;
