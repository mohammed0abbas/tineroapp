
import React from 'react';
import logo from '../header/logo.png'
import img from './Group6.png'
const About = () => {
    return (
        
            <div className="row" style={{width:'100%'}}>
                <div className="col-12 col-lg-7 mt-lg-5 pt-lg-5" >
                    <h1 className='text-left h2 mt-5 ' style={{
                        borderRadius: ' 0px 32px 32px 0px',
                        backgroundColor: '#1E8BA8',
                        width: '270px',
                        height: '60px',
                        color: '#fff',
                        padding: '10px',
                        
                        

                    }}>About Us <img src={logo} alt="" width={80} /></h1>
                    <p className='p-4' style={{ fontSize: '35px',color:'#27374D' }}>The history of Tenero Laboratorios is born from a happy and creative spirit that leads us to Over 15 years of crafting, knowledge, experience and knohow .More than 15 years in the field of medical beauty products such as mesotherapy of all kinds, hyaluronic acid, chemical peels, meical beauty creams and everything related to beauty
                    </p>
                </div>
                <div className="col-12 col-lg-5 p-0 m-0">
                    <img src={img} className='col-12 p-0 m-0' loading='lazy' alt="" />
                </div>
          

        </div>
    );
}

export default About;
