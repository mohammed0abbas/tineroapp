import React from 'react';
import Header from './header/header';
import Slider from './slider/slider';
import bg from './bghome.png'
import About from './about/about';
import Adv1 from './adv/adv1/adv1';

const Home = () => {
    return (
        <div style={{
           
            backgroundImage: `url(${bg})`,
            backgroundSize:'cover',
            backgroundPosition:'top',
        }}>
            <Header />
            <Slider />
            <About />
            <Adv1 />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          

        </div>
    );
}

export default Home;
