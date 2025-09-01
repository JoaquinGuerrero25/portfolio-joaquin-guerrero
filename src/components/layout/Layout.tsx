import { Box, Container } from "@mui/material";
import type React from "react";
import PillNavbar from "./PillNavbar";

interface Props {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <Box>
            <PillNavbar />
            <Container component='main' sx={{ flex: 1, py: 4 }}>
                {children}
            </Container>
        </Box>
    );
};