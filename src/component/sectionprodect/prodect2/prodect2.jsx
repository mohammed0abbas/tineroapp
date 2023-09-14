import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from './Group.png'
import { Contx } from '../../../App'
import img2 from './1.png'


const Prodect2 = () => {
    const { lang } = React.useContext(Contx)
    const content = data[lang]
    return (
        <>
       
        <Box sx={{ my: 7 }}>
            <Container maxWidth='lg'>
                <Typography variant='h3' sx={{ fontWeight: 'bold', color: '#1E8BA8',fontFamily:'Jura' }}>
                    {content.h}
                </Typography>
                <Typography variant='h4'  pr={{md:25}} sx={{ color: '#444',fontFamily:`Judson`,my:4 }}>
                    {content.p}
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={7}>

                       <Typography variant='h4' pr={{md:25}} sx={{ color: '#1E8BA8',fontFamily:`Judson` }}>
                          {content.p2}
                          </Typography>

                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src={img} className='col-12' alt="" loading='lazy'/>
                    </Grid>
                </Grid>

            </Container>

       
        </Box>
 <img src={img2} alt=""  width={'100%'}/>
        </>
    );
}

export default Prodect2;




const en = {
    h:`Hyaluronic Acid `,
    p:`Improves skin texture and brightness 
    with intense moisture and balance it 
    also has anti-aging skincare properties fill-in
    and diminishes the look of 
    fine lines and wrinkles .`,
    p2:`Medium and low molecular 
    weight sodium hyaluronate of 
    bio-synthetic origin.
    Its size allows the moisturizing 
    of medium and deeper layers of the skin, 
    Forming a large volume 
    aqueous gel highly resistant to 
    mechanical pressure.It has a long-lasting moisturizing effect.
    the skin becomes more luminous, firm and moisturized`,
}


const es = {
    h:`Ácido Hialurónico`,
    p:`Mejora la textura y el brillo de la piel con una humedad intensa y equilibra también tiene propiedades para el cuidado de la piel contra el envejecimiento, rellena y disminuye la apariencia de líneas finas y arrugas.`,
    p2:`Hialuronato de sodio de peso molecular medio y bajo de origen bio-sintético. Su tamaño permite la hidratación de las capas medias y más profundas de la piel, formando un gel acuoso de gran volumen altamente resistente a la presión mecánica. Tiene un efecto hidratante de larga duración. la piel se vuelve más luminosa, firme e hidratada`,
}


const data = { en, es }