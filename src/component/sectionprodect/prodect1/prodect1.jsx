import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from './Group.png'
import { Contx } from '../../../App'

const Prodect1 = () => {
    const { lang } = React.useContext(Contx)
    const content = data[lang]
    return (
        <Box sx={{ my: 5 }}>
            <Container maxWidth='lg'>
                <Typography variant='h3' sx={{ fontWeight: 'bold', color: '#1E8BA8' }}>
                    {content.h}
                </Typography>
                <Typography variant='body1' pr={{md:25}} sx={{ color: '#444' }}>
                    {content.p}
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={7}>

                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {
                                content.list.map((item, index) => {
                                    return (
                                        <li key={index} style={{ color: '#1E8BA8' }}>
                                            <Typography variant='h6' sx={{ color: '#777', mt: 3 }}>
                                                <Typography variant='h5' sx={{ color: '#1E8BA8' }}>
                                                    {item.h}
                                                </Typography>
                                                {item.p}
                                            </Typography>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img src={img} className='col-12' alt="" loading='lazy'/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default Prodect1;




const en = {
    h: `EYECONTOUR COCKTAIL`,
    p: `Reduces puffiness dramatically and enhances elasticity
    of the skin around  the eyes. Releives dark circles providing
    a youthful look. The content of hyaluronic acid diminishes fine
    lines and wrikles
    `,
    list: [
        {
            h: `SODIUM HYALURONATE:`,
            p: `Improves skin texture and brightness with intense moisture and balance It also has 
            anti-aging skincare properties fill-in and diminishes the look offine lines and wrinkles.`
        },
        {
            h: `TROXERUTIN COUMARIN:`,
            p: `Vasoprotective Used in aftershave lotions,bath products, bubble baths, cleansing 
            products, moisturizers, skin care products and suntan products.`
        },
        {
            h: `MAGNESIUM ASCORBYL PHOSPHATE `,
            p: `Skin lighting efects with a strong inhibitory effects on melanin formation Reduces 
            capillary fragility and premeability. Vasoprotectiv`
        },
        {
            h: `CYNARA SCOLYMUS LEAF EXTRACTGINKGO
            BILOBA LEAF EXTRACTN:`,
            p: `Stimulates the circulation and has a  diuretic and anti-edema efect Reduces 
            blood viscosity, inhibiting plateletactivating factor, improves vascular tone and 
            thus lead to improvement in microcirculatio`
        },
    ]
}

const es = {
    h: `CÓCTEL PARA CONTORNO DE OJOS`,
    p: `Reduce la hinchazón de forma drástica y mejora la elasticidad de la piel alrededor de los ojos.
    Alivia las ojeras proporcionando un aspecto juvenil. El contenido de ácido hialurónico disminuye las
    líneas finas y las arrugas
    `,
    list: [
        {
            h: `HIALURONATO DE SODIO:`,
            p: `Mejora la textura y el brillo de la piel con una hidratación intensa y un equilibrio.
            También tiene propiedades antienvejecimiento para el cuidado de la piel, rellena y disminuye
            la apariencia de líneas finas y arrugas.`
        },
        {
            h: `TROXERUTINA COUMARINA:`,
            p: `Vasoprotector Se utiliza en lociones para después del afeitado, productos de baño, baños de
            burbujas, productos de limpieza, humectantes, productos para el cuidado de la piel y productos
            bronceadores.`
        },
        {
            h: `FOSFATO DE ASCORBIL MAGNÉSICO:`,
            p: `Efectos de iluminación de la piel con fuertes efectos inhibidores sobre la formación de melanina.
            Reduce la fragilidad y la permeabilidad capilar. Vasoprotectivo`
        },
        {
            h: `EXTRACTO DE HOJA DE CYNARA SCOLYMUS GINKGO
            EXTRACTO DE HOJA DE BILOBA N:`,
            p: `Estimula la circulación y tiene un efecto diurético y anti-edema. Reduce la viscosidad de la sangre,
            inhibiendo el factor activador de plaquetas, mejora el tono vascular y, por lo tanto, conduce a la mejora
            de la microcirculación.`
        },
    ]
}

const data = { en, es }