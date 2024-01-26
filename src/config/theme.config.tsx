'use client'
// customización con material
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Provider
type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  BG = "#12181B",
  LIME = "#C8FA5F",
}

const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: themePalette.BG,
      },
      primary: {
        main: themePalette.LIME,
      },
    },
    typography:{
      fontSize: 14
    },
    components: {
      MuiButton: {
        defaultProps:{
          style:{
            textTransform: "none",
            boxShadow: "none",
            borderRadius: "0.5em",
          }
        }
      }
    },
  });

export const Themeconfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
