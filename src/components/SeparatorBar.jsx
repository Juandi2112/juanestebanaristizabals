import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const SeparatorBar = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      height="8rem"
      marginTop="1rem"
      backgroundColor={colors.primary[400]}
      alignItems="center"
      justifyContent="center"
      display="flex"
      fontSize="2.5rem"
      fontWeight="bold"
    >
      {title}
    </Box>
  );
};

export default SeparatorBar;
