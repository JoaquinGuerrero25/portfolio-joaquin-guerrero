// src/providers/theme.ts
import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
    // Esquemas de color
    colorSchemes: {
        light: {
            palette: {
                primary: { main: "#3f51b5" },
                secondary: { main: "#00bcd4" },
            },
        },
        dark: {
            palette: {
                primary: { main: "#3f51b5" },
                secondary: { main: "#00bcd4" },
            },
        },
    },
    // Selector para alternar manualmente (data-attribute en <html>)
    cssVariables: {
        colorSchemeSelector: "data", // genera [data-light] y [data-dark]
    },
    typography: {
        fontFamily: `"Inter", "Roboto", Arial, sans-serif`,
    },
});