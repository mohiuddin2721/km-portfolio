import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Projects></Projects>
        </div>
    );
};

export default Home;