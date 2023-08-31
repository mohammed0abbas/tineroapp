import React from 'react';
import img from './adv1.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import arr from './Arrow.png'

import imgad from './Group 8 (2).png'
import { Container, Grid, Box, Typography } from '@mui/material';


const Adv1 = () => {
    const imgadv = [img1, img2, img3, img4, img5]
    return (
        <div className='row p-5 m-0 my-4' style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            position: 'relative',

        }}>

            <Container maxWidth='lg' >
                <Grid container spacing={5} my={{xs:17,md:0}} >
                    {
                        imgadv.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={2.4} key={index}

                                >
                                    <Box sx={{
                                        width: '100%',
                                        borderRadius: '50%',
                                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                                        border: '4px solid #1E8BA8',
                                        px: 4,
                                    }}>
                                        <img src={item} alt="" className='col-12' />
                                    </Box>

                                    <Typography variant='h6' className='text-center mt-3' sx={{
                                        color: '#1E8BA8',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}>
                                       {en[index]}
                                    </Typography>





                                </Grid>
                            )
                        })
                    }
                </Grid>

            </Container>



        </div>
    );
}

export default Adv1;




const en = [

    `Hyaluronic Acid `,
    `HAIR COCKTAIL`,
    `Hialuronidase`,
    `EYECONTOUR COCKTAIL`,
    `WHITENING COCKTAIL`,
]