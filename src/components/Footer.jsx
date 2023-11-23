import { Box, Typography, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {" © "} {new Date().getFullYear()}{" "}
      <Link
        color="inherit"
        href="https://github.com/Juandi2112"
        target="_blank"
      >
        Juan Diego Jiménez.
      </Link>
      {" All rigths reserved."}
    </Typography>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ py: 4 }}>
      <Copyright />
    </Box>
  );
}

export default Footer;
