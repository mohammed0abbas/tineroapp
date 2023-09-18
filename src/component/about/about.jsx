
import React from 'react';
import logo from '../header/logo.png'
import img from './Group6.png'
import { Contx } from '../../App'

const About = () => {
    const contx = React.useContext(Contx)
    const { lang } = contx
    const { title, p } = lang === 'en' ? en : es

    return (
        
            <div className="row" id='About' style={{width:'100%'}}>
                <div className="col-12 col-lg-7 mt-lg-5 pt-lg-5" >
                    <h1 className='text-left h2 mt-5 ' style={{
                        borderRadius: ' 0px 32px 32px 0px',
                        backgroundColor: '#1E8BA8',
                        width: '270px',
                        height: '60px',
                        color: '#fff',
                        padding: '10px',
                        
                        

                    }}>{title} <img src={logo} alt="" width={80} /></h1>
                    <p className='p-4' style={{ fontSize: '35px',color:'#27374D' }}>{p}
                    </p>
                </div>
                <div className="col-12 col-lg-5 p-0 m-0">
                    <img src={img} className='col-12 p-0 m-0' loading='lazy' alt="" />
                </div>
          

        </div>
    );
}

export default About;


const en = {
    title: 'About Us',
    p: 'The history of Tenero Laboratorios is born from a happy and creative spirit that leads us to Over 15 years of crafting, knowledge, experience and knohow .More than 15 years in the field of medical beauty products such as mesotherapy of all kinds, hyaluronic acid, chemical peels, meical beauty creams and everything related to beauty'
}

const es = {
    title: 'Acerca de',
    p: 'La historia de Tenero Laboratorios nace de un espíritu alegre y creativo que nos lleva a más de 15 años de artesanía, conocimiento, experiencia y conocimiento. Más de 15 años en el campo de los productos de belleza médica como la mesoterapia de todo tipo, el ácido hialurónico, los peelings químicos, las cremas de belleza médica y todo lo relacionado con la belleza'
}

