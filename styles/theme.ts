import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: "#0054a6", dark: "#003a74" },
    secondary: { main: "#ff0000", dark: "#b20000" },
    error: {
      main: red.A400,
    },
  },
  typography: {
    body1: {
      fontWeight: 600,
    },
  },
});

export default theme;
