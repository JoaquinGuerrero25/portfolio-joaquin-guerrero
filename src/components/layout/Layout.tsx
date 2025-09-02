import { Box, Container } from "@mui/material";
import type React from "react";
import PillNavbar from "./PillNavbar";

interface Props {
    children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <Box width={'100%'}>
            <Box
                sx={{
                    position: "absolute",
                    top: "-92px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: '100%',
                    height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(8,84,198,0.4) 0%, transparent 70%)",
                    filter: "blur(120px)",
                    zIndex: -1,
                }}
            />
            <PillNavbar />
            <Container component='main'>
                {children}
            </Container>
        </Box>
    );
};