import React from 'react';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
// import Particle from './Particle';


const Banner = () => {

    return (
        <div id="hero" className="hero mb-32">
            {/* <Particle></Particle> */}
            <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='mask mask-circle max-w-sm mb-12 lg:mb-0'
                >
                    <img src="images/profile.jpeg" alt='me' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-2xl'
                >
                    <h1 className="text-5xl font-semibold mb-5">Myself K M Mohiuddin Patwary</h1>
                    <div className="text-3xl leading-relaxed mb-5">MERN-Stack Web Developer With Expertise on
                        <span className='font-semibold'>
                            <TypewriterComponent
                                options={{
                                    strings: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        <span className='font-semibold'>
                            <TypewriterComponent
                                options={{
                                    strings: ['Mongodb', 'Nodejs', 'JWT Token', 'firebase'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <a href="https://drive.google.com/file/d/1C0e3zDmnhyNpamUijjdgTgobeNpkqECS/view?usp=sharing" target="_blank" className="btn btn-primary">Resume</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;