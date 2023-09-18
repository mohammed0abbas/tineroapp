import React from 'react';
import img from './shape.png'
import logo from './logo.png'
import {Contx} from '../../App'
import { Link } from '@mui/material';

const Header = () => {
    const contx = React.useContext(Contx)

   


    const nav = contx.lang === 'en' ? ['About', 'Products','Contact'] : ['Acerca de', 'Productos','Contacto']
    const links = [ 'About', 'Products','Contact']
    return (
        <div className='pt-3' style={HeaderStyle}>
           

         
            <div className="row"
            style={{
                display: 'flex',
             
                alignItems: 'space-between',
                width: '100%',
                
                padding: '0 5vmin',
                margin: '0',
                verticalAlign: 'middle',

            }}
            >
                <div className="col-2">
                    <img src={logo} className='col-12' alt="" />
                </div>

                <ul className='col-8 row'>
                {nav.map((item, index) => {
                    return (
                        
                       

                       
                        <li key={index} className="col" style={{
                            listStyle: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                           
                            margin: '3%',
                            padding: '3%',
                           
                        }}>
                             <Link key={index} href={`#${links[index]}`} underline='none' >
                            <h6 className='text-white m-0 pb-1' style={{fontSize:'1.8vw', borderBottom: '2px solid #fff '}}>{item}</h6>
                        </Link>
                         </li>
                       
                    )
                })
                }</ul>


                <div className="col-2"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                
                >
                    <select name="" id="" 
                    
                    onChange={(e)=>contx.setLang(e.target.value)}
                    
                    style={{
                        padding: '10px',
                        borderRadius: '26px',
                        fontSize: '1.5vw',
                        color: '#068BA8',
                    }}>
                        
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
                
         
        </div>
    );
}

export default Header;


const HeaderStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '53vmin',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0',
    
}

