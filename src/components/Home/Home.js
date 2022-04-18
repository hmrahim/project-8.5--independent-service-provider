import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <Pricing></Pricing>
            
        </div>
    );
};

export default Home;