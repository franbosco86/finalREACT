import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Checkout() {
    const location = useLocation();
    const { cart } = location.state || { cart: [] };

    const totalAmount = cart.reduce((acc, item) => acc + item.subTotal, 0);

    return (
        <Box m={4}>
            <Box display="flex" alignItems="center" mb={4}>
                <IconButton component={Link} to="/" aria-label="back">
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5">Checkout</Typography>
            </Box>
            {cart.map((item) => (
                <Box key={item.id} mb={2}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="body2">Precio Unitario: ${item.price}</Typography>
                    <Typography variant="body2">Cantidad: {item.quantity}</Typography>
                    <Typography variant="body2">Subtotal: ${item.subTotal}</Typography>
                </Box>
            ))}
            <Box mt={4}>
                <Typography variant="h6">Total de la compra: ${totalAmount}</Typography>
            </Box>
            <Button variant="contained" color="primary" component={Link} to="/">
                Volver a la Home
            </Button>
        </Box>
    );
}

export default Checkout;
