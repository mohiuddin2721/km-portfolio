import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero mb-32">
            <div className="hero-content w-full flex-col justify-between lg:flex-row">
                <div className='mask mask-circle max-w-sm mb-12 lg:mb-0'>
                    <img src="images/pic1.jpg" className="" alt='about me' />
                </div>
                <div className='max-w-2xl mr-0 lg:mr-16'>
                    <h1 className="text-5xl font-semibold mb-5">About Myself</h1>
                    <p className="leading-relaxed mb-5">I have been working as a front-end developer for the last 2 years. I have taken a special training from programming hero for full stack development. So I am comfortable in backend technologies like NodeJS, Express JS. MongoDB is my preferred database. I have completed some full stack development based on projects.
                        <br /> <br />
                        I use React as my development framework as it is one of the popular JavaScript framework. I can make responsive websites by CSS libraries like Bootstrap, React Bootstrap, Tailwind and daisyUI. I can use some exclusive React packages like React router, React Query, React Hooks, Custom Hooks, Axios, React firebase hooks. Many important tools like GitHub, VS Code, Hosting service of Netlify, Firebase and Heroku.
                        <br /> <br />
                        I always try to learn new technologies continuously for survival in this tech-based world. I always enjoy coding and it’s my passion.
                    </p>
                    <a href='#portfolio' className="btn btn-primary">Recent Projects</a>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMe;