import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import { tokens } from "../theme";

const InterviewList = ({ img, link, index, tema, medio, fecha }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const colors = tokens(theme.palette.mode);

  const containerStyle = {
    padding: theme.spacing(4),
  };
  const imageStyle = {
    width: "100%",
    maxWidth: "40rem",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };
  const textStyle = {
    width: "100%",
  };

  return (
    <Box
      backgroundColor={
        index % 2 === 0 ? `${colors.primary[400]}` : `${colors.primary[500]}`
      }
    >
      <Box style={containerStyle}>
        <Grid
          container
          justifyContent="center"
          spacing={0}
          sx={{ width: isSmallScreen ? "100%" : "88%", mx: "auto" }}
        >
          <Grid item xs={12} lg={5}>
            <Link href={link} target="_blank" rel="noreferrer">
              <img
                src={img}
                style={imageStyle}
                alt="Imagen"
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>
          </Grid>
          <Grid item xs={12} lg={5} ml={isLargeScreen ? 9 : 0}>
            <Box style={textStyle}>
              <Typography variant="h4" marginTop="1rem" component="div">
                <b>Tema: </b> {tema}
              </Typography>
              <Typography variant="h4" marginTop="1rem" component="div">
                <b>Medio: </b> {medio}
              </Typography>
              <Typography variant="h4" marginTop="1rem" component="div">
                <b>Fecha: </b> {fecha}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InterviewList;
