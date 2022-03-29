import React from 'react';
import Banner from '../Banner/Banner';
import OurProcess from '../OurProcess/OurProcess';
import Services from '../Services/Services';
import SocialContact from '../SocialContact/SocialContact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurProcess></OurProcess>
            <SocialContact></SocialContact>
            
        </div>
    );
};

export default Home;