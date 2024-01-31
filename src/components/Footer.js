import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, Grid } from "@mui/material";

const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
            <Container maxWidth="lg">
                <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
                    © 2024 David Domínguez Mejías. Todos los derechos reservados.
                </Typography>
            </Container>
        </Box>
    )
}
export default Footer;