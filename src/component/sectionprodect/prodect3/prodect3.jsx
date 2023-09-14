import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from './Group.png'
import { Contx } from '../../../App'
import img2 from './1.png'



const Prodect3 = () => {
    const { lang } = React.useContext(Contx)
    const content = data[lang]
    return (
        <Box my={7}>
            <Container maxWidth='lg'>
                <Grid container spacing={2} >

                    <Grid item xs={12} md={5} mt={10} >
                        <img src={img} className='mt-md-5' alt="" width={'100%'}/>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Typography variant='h3' sx={{ fontWeight: 'bold', color: '#1E8BA8',fontFamily:'Jura' }}>
                            {content.h}
                        </Typography>
                        <Typography variant='h6'   sx={{ color: '#444',fontFamily:`Judson`,my:4 }}>
                            {content.p}
                        </Typography>


                        {
                            content.list.map((item, index) => {
                                return (
                                    <div key={index} style={{ color: '#1E8BA8' }}>
                                        <Typography variant='h6' sx={{ color: '#777', mt: 3,fontFamily:`Judson` }}>
                                            <Typography variant='h5' sx={{fontFamily:`Jura`,fontWeight:'bold' ,
                                            bgcolor:'#1E8BA8',
                                            color:'white',
                                            borderRadius:'19px',
                                            py:1,
                                            px:0.8,
                                            maxWidth:'fit-content',
                                        }}>
                                                {item.h}
                                            </Typography>
                                            {item.p}
                                        </Typography>
                                    </div>
                                )
                            })

                        }
                    </Grid>

                </Grid>
            </Container>

            <img src={img2} alt="" width={'100%'} loading='lazy'/>
        </Box>
    );
}

export default Prodect3;


const en = {
    h: `HAIR COCKTAIL `,
    p: `Hair restorative and energizing solution formulated with
    Dexpanthenol (hair restorer and regulator), Vitamin B complex and Iron in gluconate salt form, which provide nourishment and vitality to the hair 
    .`,
    list: [
        {
            h:`PANTHENOL`,
            p:`Vitamin B5. Provides calm and helps 
            healing skin giving a soft and elastic feeling. 
            Good for treatment of hair loss and 
            seborrheic dermatitis of the scalp.
            Very positive results in postinfections alopecia treatments.`,
        },
        {
            h:`PYRIDOXINE HCL
            `,
            p:`Vitamin B6. Reducessebum levels and reduce the appea-rance of spots.`
        },
        {
            h:`THIAMINE HCL`,
            p:`Vitamin B1. Thiamine gives shine to the hair and improves its quality.`
        },
        {
            h:`FERROUS GLUCONATE`,
            p:`Provieds nutrition and vitality to the hair, preventing it from deteriorating and falling. `
        },
    ]
}

const es = {
    h: `COCTEL PARA EL CABELLO`,
    p: `Solución restauradora y energizante del cabello formulada con
    Dexpantenol (restaurador y regulador del cabello), complejo de vitamina B y hierro en forma de sal de gluconato, que proporcionan nutrición y vitalidad al cabello.`,
    list: [
        {
            h:`PANTENOL`,
            p:`Vitamina B5. Proporciona calma y ayuda a la curación de la piel dándole una sensación suave y elástica.
            Bueno para el tratamiento de la caída del cabello y la dermatitis seborreica del cuero cabelludo.
            Resultados muy positivos en los tratamientos de alopecia postinfecciosa.`,
        },
        {
            h:`CLORHIDRATO DE PIRIDOXINA`,
            p:`Vitamina B6. Reduce los niveles de sebo y reduce la aparición de manchas.`
        },
        {
            h:`CLORHIDRATO DE TIAMINA`,
            p:`Vitamina B1. La tiamina le da brillo al cabello y mejora su calidad.`
        },
        {
            h:`GLUCONATO FERROSO`,
            p:`Proporciona nutrición y vitalidad al cabello, evitando que se deteriore y caiga.`
        },
    ]
}





const data = { en, es }