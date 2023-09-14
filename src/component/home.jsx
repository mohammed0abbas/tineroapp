import React from 'react';
import Header from './header/header';
import Slider from './slider/slider';
import bg from './bghome.png'
import About from './about/about';
import Adv1 from './adv/adv1/adv1';
import Prodect1 from './sectionprodect/prodect1/prodect1';
import adv2 from './adv/adv2.png';
import Prodect2 from './sectionprodect/prodect2/prodect2';
import Prodect3 from './sectionprodect/prodect3/prodect3';
import Prodect4 from './sectionprodect/prodect4/prodect4';
import Prodect5 from './sectionprodect/prodect5/prodect5';
import Footer from './footer/footer';


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
            <Prodect2 />
            <Prodect3 /> 
            <Prodect4 />
            <Prodect5 />
            <Footer />

           
          

        </div>
    );
}

export default Home;
