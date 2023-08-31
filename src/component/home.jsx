import React from 'react';
import Header from './header/header';
import Slider from './slider/slider';
import bg from './bghome.png'
import About from './about/about';
import Adv1 from './adv/adv1/adv1';
import Prodect1 from './sectionprodect/prodect1/prodect1';
import adv2 from './adv/adv2.png';

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
            <Prodect1 />
            <div  >
                <img src={adv2} width={'100%'} alt="" />
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          

        </div>
    );
}

export default Home;
