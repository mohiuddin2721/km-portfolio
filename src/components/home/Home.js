import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
        </div>
    );
};

export default Home;