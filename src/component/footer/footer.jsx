import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img from './bg.png'

const Footer = () => {
    return (
        <Box sx={{ backgroundImage:`url(${img})`, color: 'white' ,height:'50vh',
        backgroundSize:'cover',
        backgroundPosition:'top',

        }}>

        </Box>
    );
}

export default Footer;
