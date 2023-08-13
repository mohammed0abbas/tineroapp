import React from 'react';
import img from './shape.png'
import logo from './logo.png'

const Header = () => {

    const nav = ['Home', 'Explores', 'Call Us','About']
    return (
        <div className='pt-5' style={HeaderStyle}>

         <div className="continer">
            <div className="row"
            style={{
                display: 'flex',
             
                alignItems: 'center',
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
                           
                            margin: '0px',
                            padding: '0px',
                           
                        }}>
                            <h6 className='text-white m-0 p-0' style={{fontSize:'2.3vw', borderBottom: '2px solid #fff ',}}>{item}</h6>
                        </li>
                    )
                })
                }</ul>
                <div className="col-2">
                    <select name="" id="" style={{
                        padding: '10px',
                        borderRadius: '26px',
                        fontSize: '1.5vw',
                        color: '#068BA8',
                    }}>
                        <option value="">English</option>
                        <option value="">عربي</option>
                    </select>
                </div>
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

