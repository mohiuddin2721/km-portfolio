import React from 'react';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import Particles from 'react-particles-js';
import particlesConfig from '../particlesConfig/particlesConfig';
// import Particle from './Particle';


const Banner = () => {
    const profilePicBorder = {
        marginTop: '-60px'
    }

    return (
        <div id="hero" className="hero mb-16 relative h-screen">
            {/* <Particle></Particle> */}
            <Particles className="h-full" params={particlesConfig} />
            <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={profilePicBorder}
                    className='mask mask-circle max-w-sm mb-12 lg:mb-0'
                >
                    <img src="images/profile.png" alt='me' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-2xl'
                >
                    <h1 className="text-5xl text-green-500 font-bold mb-5 uppercase">K M Mohiuddin Patwary</h1>
                    <div className="text-3xl leading-relaxed font-bold mb-5 uppercase">Web Developer With Expertise on
                        <span className='font-bold text-green-600'>
                            <TypewriterComponent
                                options={{
                                    strings: ['FRONTEND DEVELOPER', 'MERN DEVELOPER', 'BACKEND DEVELOPER', 'REACT DEVELOPER'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <a href="https://drive.google.com/file/d/1C0e3zDmnhyNpamUijjdgTgobeNpkqECS/view?usp=sharing" target="_blank" className="btn btn-sm btn-primary">Resume</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;