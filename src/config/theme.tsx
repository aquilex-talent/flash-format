import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontWeight: "bold",
      '@media (max-width: 599px)': {
        fontSize: 32,
      },
      '@media (min-width: 600px) and (max-width: 899px)': {
        fontSize: 48,
      },
      '@media (min-width: 900px) and (max-width: 1199px)': {
        fontSize: 64,
      },
      '@media (min-width: 1200px)': {
        fontSize: 72,
      },
    },
    h2: {
      fontWeight: "bold",
      fontSize: 52,
    },
    h3: {
      fontWeight: "normal",
      fontSize: 40,
    },
    body1: {
      fontWeight: "normal",
      '@media (max-width: 599px)': {
        fontSize: 14,
      },
      '@media (min-width: 600px) and (max-width: 899px)': {
        fontSize: 18,
      },
      '@media (min-width: 900px) and (max-width: 1199px)': {
        fontSize: 20,
      },
      '@media (min-width: 1200px)': {
        fontSize: 24,
      },
    },
    caption: {
      fontWeight: "lighter",
      fontSize: 16,
    },
  },
  palette: {
    background: {
      default: "#744FA4",
    },
    primary: {
      light: "#744FA4",
      main: "#512B7C",
      dark: "#320162",
    },
    secondary: {
      light: "#EC407A",
      main: "#E91E63",
      dark: "#C2185B",
    },
  },
});
export default theme;
