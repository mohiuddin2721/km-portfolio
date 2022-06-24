import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    const style = {
        background: "#5FD068",
        borderRadius: "50%"
    }

    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
            <ScrollToTop
                smooth
                top="100"
                width="40"
                height="20"
                style={style}
            />
        </div>
    );
};

export default Home;