import React from 'react';
import img from './Group5.png'
import bg from './bg.png'

import img1 from './1.jpg'

const Slider = () => {
    return (<>
        <div className='row' style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateY(-17%)',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}>
            <img className='col-11' src={img} alt="" />
            

        </div>
        
        <img width={'100%'} src={img1} alt="" />

        
        </>
    );
}

export default Slider;
