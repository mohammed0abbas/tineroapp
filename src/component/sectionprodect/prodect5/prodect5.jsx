import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img from './Group.png'
import { Contx } from '../../../App'
import img1 from './Group1.png'

const Prodect5 = () => {
    const { lang } = React.useContext(Contx)
    const imghead = lang === 'en' ? img : img1
    return (
        <Box my={7}>
            <img src={imghead} alt="" width={'100%'} loading='lazy' />
        </Box>
    );
}

export default Prodect5;
