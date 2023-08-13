import React from 'react';
import img from './adv1.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import arr from './Arrow.png'

import imgad from './Group 8 (2).png'


const Adv1 = () => {
    const imgadv = [img1,img2,img3,img4,img5]
    return (
        <div className='row p-5 m-0 my-4' style={{backgroundImage:`url(${img})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100%',
        position:'relative',
       
        }}>

            <img src={imgad} alt="" />

            <p className='col' style={{
                position:'absolute',
                bottom:'0',
                left:'15%',
                fontSize:'2vw',
                
            }}>
                name1
            </p>
          
        </div>
    );
}

export default Adv1;
