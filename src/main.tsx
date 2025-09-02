import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Theme } from "./providers/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={Theme} defaultMode="system" disableTransitionOnChange>
            <BrowserRouter basename="/portfolio-jg">
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);