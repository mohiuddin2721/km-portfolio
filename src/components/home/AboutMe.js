import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero mb-32"
        >
            <div id='aboutMe' className="hero-content w-full flex-col justify-between lg:flex-row">
                <div className='mask mask-circle max-w-sm mb-12 lg:mb-0'>
                    <img src="images/pic1.jpg" className="" alt='about me' />
                </div>
                <div className='max-w-2xl mr-0 lg:mr-16'>
                    <h1 className="text-3xl text-green-500 font-semibold mb-0">K M MOHIUDDIN PATWARY</h1>
                    <p className='mb-2 text-sm'>Mern-Stack Web Developer</p>
                    <p>Hello gentleman, I am a mern stack web developer. I can create your website according to your wishes.</p>
                    <p className="leading-relaxed mb-5">I have creative knowledge of Mern-Stack Web Development. So I can create modern and eye-catching responsive websites. I always try to solve creative problems and learn new technologies continuously for survival in this tech-based world. I am looking to start my career as an entry-level frontend web developer with a reputed firm driven by technology.</p>
                    
                    <div className='mt-4'>
                        <Link to='/' className='btn btn-sm btn-outline'>Back to home</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;