import { Box, Grid } from "@mui/material";

const ImageGrid = ({ img1, img2, img3 }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  const imageStyle = {
    width: "100%",
    height: "90vh",
    objectFit: "contain",
  };

  return (
    <Box>
      <Box sx={containerStyle}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <img src={img1} alt="imagen1" style={imageStyle} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={img2} alt="imagen2" style={imageStyle} />
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={img3} alt="imagen3" style={imageStyle} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ImageGrid;
