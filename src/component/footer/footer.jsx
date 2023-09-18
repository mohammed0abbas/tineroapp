import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import logo from '../../logo.svg'
import { Contx } from '../../App'

const Footer = () => {
    const { lang } = React.useContext(Contx)
    const { h1, p, p1, h2 } = lang === 'en' ? en : es
    
    return (
        <Box id='Contact' sx={{
            bgcolor: '#1E8BA8'

        }}>

            <Container maxWidth='lg' sx={{ height: '100%' }}>

           
            <Grid container spacing={5} sx={{ height: '100%' }}>
                <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img className='text-center col-8 p-5' src={logo} alt="" style={{
                   
                    }} />
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>

                    <Box >
                        <Typography variant='h5'  sx={{ color: '#27374D',fontFamily:'judson',fontWeight:'bold' }}>
                        {h1}
                        </Typography>
                        <Typography  variant='h6' sx={{ color: '#fff' }}>
                        {p}<br />
                        {p1}
                        
                        </Typography>
                    </Box>

                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>

                <Box >
                <Typography variant='h5' sx={{ color: '#27374D',fontFamily:'judson',fontWeight:'bolder' }}>
                        {h2}
                        </Typography>
                        <Typography variant='h6'  sx={{ color: '#fff' }}>
                            <a href="mailto:info@teniro-beauty.com" style={
                                {
                                    color: '#fff',
                                }
                            }>
                            info@teniro-beauty.com
                            </a>
                            <br />
                            <br />
                        </Typography>
                    </Box>

                </Grid>
            </Grid>


            </Container>
        </Box>
    );
}

export default Footer;


const en = {
    h1: 'Visit us',
    p: 'C/de les Roquetes,',
    p1: ' Barcelona (Spain)',

    h2: 'Contact us',
}

const es = {
    h1: 'Visítanos',
    p: 'C/de les Roquetes,',
    p1: ' Barcelona (España)',
    h2: 'Contáctenos',
}


    