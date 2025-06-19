import { Box, Grid, Typography, useTheme } from "@mui/material";

const InfoContainer = ({ img }) => {
  const theme = useTheme();

  const containerStyle = {
    padding: theme.spacing(4),
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "40rem",
  };

  const textStyle = {
    width: "100%",
  };

  return (
    <Box style={containerStyle} marginTop="20px">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src={img} style={imageStyle} alt="Imagen" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box style={textStyle}>
            <Typography variant="h1">
              Juan Esteban Aristizábal Salazar
            </Typography>
            <Typography variant="h4" marginTop="5rem">
              Investigador en Movilidad Urbana
            </Typography>
            <Typography variant="h4" marginTop="20px">
              Magíster en Ingeniería - Infraestructura y Sistemas de
              Transporte
            </Typography>
            <Typography variant="h4" marginTop="20px">
              Ingeniero Civil Especialista en Vías y Transporte
            </Typography>
            <Typography variant="h4" marginTop="20px">
              Universidad Nacional de Colombia
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoContainer;
