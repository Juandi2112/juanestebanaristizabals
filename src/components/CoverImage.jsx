import { useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CoverImage = ({ image, title, opa }) => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    opacity: `${opa}`,
  };

  const textStyle = {
    position: "absolute",
    textAlign: "center",
    fontSize: "5rem",
    fontWeight: "bold",
  };

  const nextSectionRef = useRef(null);

  const handleArrowDownClick = () => {
    const nextSection = nextSectionRef.current;
    const nextSectionPosition =
      nextSection.offsetTop - nextSection.parentElement.offsetTop;
    const scrollPosition = nextSectionPosition - 64;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <Box>
      <Box style={containerStyle}>
        <Box style={imageStyle} />
        <Typography variant="h2" style={textStyle}>
          {title}
        </Typography>
        <IconButton
          sx={{
            position: "absolute",
            bottom: "1rem",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          onClick={handleArrowDownClick}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Box>
      <Box ref={nextSectionRef} />
    </Box>
  );
};

export default CoverImage;
