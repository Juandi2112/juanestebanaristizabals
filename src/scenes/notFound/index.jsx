import Footer from "../../components/Footer";
import { Box, Button, Typography } from "@mui/material";

const Error404 = () => {
    
  return (
    <Box style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h1" component="h1" gutterBottom >
        Not found :(((((
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you're looking for was not found.
      </Typography>
      <Button  href="/" variant="contained" color="error" sx={{ mt:"1rem" , mb:"3rem"}}>
        Go to Home Page
      </Button>
      <Footer/>
    </Box>
  );
}

export default Error404;