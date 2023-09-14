import React from 'react';
import logo from './1.svg';

const Loder = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <img src={logo} alt="" className='loder' width={'350vw'} />
        </div>
    );
}

export default Loder;
