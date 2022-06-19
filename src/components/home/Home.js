import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
            <ScrollToTop 
            smooth 
            color='green'
            />
        </div>
    );
};

export default Home;