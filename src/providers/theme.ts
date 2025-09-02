import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
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
    cssVariables: {
        colorSchemeSelector: "data",
    },
    typography: {
        fontFamily: '"Geist", "Geist Fallback", sans-serif',
    },
});