import { Box, CardMedia, useMediaQuery, useTheme } from "@mui/material";

const PdfViewer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box margin=" 0 auto" mt="4rem">
      <CardMedia
        component="iframe"
        title="PDF Preview"
        src={`https://drive.google.com/file/d/1LckFryxSfpuq5agD9ZZcxBjgIKUguGgf/preview`}
        style={{
          width: isSmallScreen ? "100%" : "50%",
          height: "88vh",
          border: "none",
          alignItems: "center",
          margin: "auto",
        }}
      />
    </Box>
  );
};

export default PdfViewer;
