import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: { main: "#0054a6" },
    secondary: { main: "#ff0000" },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
