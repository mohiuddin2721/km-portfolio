import React from 'react';
import { FaJsSquare, FaHtml5, FaCss3, FaReact, FaEtsy, FaNodeJs, FaBootstrap, FaGithub, FaChrome, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiStripe, SiReactrouter, SiTypescript, SiMaterialui, SiFirebase, SiHeroku, SiNetlify } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
// import { TbBrandReactNative, TbBrandNextjs } from 'react-icons/tb';
import { GiTwirlyFlower } from 'react-icons/gi';
import { FiFramer } from 'react-icons/fi';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const Skills = () => {
    const expertise = [
        {
            id: 1,
            name: "Javascript",
            icon: <i><FaJsSquare /></i>,
            color: "text-yellow-500",
        },
        {
            id: 2,
            name: "HTML5",
            icon: <i><FaHtml5 /></i>,
            color: "text-red-500",
        },
        {
            id: 3,
            name: "CSS",
            icon: <i><FaCss3 /></i>,
            color: "text-blue-500",
        },
        {
            id: 4,
            name: "React.Js",
            icon: <i><FaReact /></i>,
            color: "text-blue-500",
        },
        {
            id: 5,
            name: "ES6",
            icon: <i><FaEtsy /></i>,
            color: "text-green-500",
        },
        {
            id: 6,
            name: "Tailwind",
            icon: <i><SiTailwindcss /></i>,
            color: "text-blue-500",
        },
        {
            id: 7,
            name: "Rest API",
            icon: <i><TbApi /></i>,
            color: "text-yellow-500",
        },
        {
            id: 8,
            name: "Express.js",
            icon: <i><SiExpress /></i>,
            color: "text-green-500",
        },
    ];

    const comfortable = [
        {
            id: 1,
            name: "Node.js",
            icon: <i><FaNodeJs /></i>,
            color: "text-yellow-500",
        },
        {
            id: 2,
            name: "MongoDB",
            icon: <i><SiMongodb /></i>,
            color: "text-green-500",
        },
        {
            id: 3,
            name: "Bootstrap",
            icon: <i><FaBootstrap /></i>,
            color: "text-yellow-500",
        },
        {
            id: 4,
            name: "React Query",
            icon: <i><FaReact /></i>,
            color: "text-red-500",
        },
        {
            id: 5,
            name: "Axios",
            icon: <i>{'A'}</i>,
            color: "text-yellow-500",
        },
        {
            id: 6,
            name: "DaisyUI",
            icon: <i><GiTwirlyFlower /></i>,
            color: "text-yellow-500",
        },
        {
            id: 7,
            name: "Stripe",
            icon: <i><SiStripe /></i>,
            color: "text-green-500",
        },
        {
            id: 8,
            name: "React Router",
            icon: <i><SiReactrouter /></i>,
            color: "text-yellow-500",
        },
    ];

    const familiar = [
        {
            id: 1,
            name: "Typescript",
            icon: <i><SiTypescript /></i>,
            color: "text-red-500",
        },
        {
            id: 2,
            name: "AOS",
            icon: <i>{'AOS'}</i>,
            color: "text-blue-400",
        },
        // {
        //     id: 2,
        //     name: "React Native",
        //     icon: <i><TbBrandReactNative /></i>,
        //     color: "text-blue-400",
        // },
        // {
        //     id: 3,
        //     name: "Mongoose",
        //     icon: <i><SiMongodb /></i>,
        //     color: "text-green-500",
        // },
        // {
        //     id: 4,
        //     name: "Next.Js",
        //     icon: <i><TbBrandNextjs /></i>,
        //     color: "text-green-500",
        // },
        {
            id: 5,
            name: "MaterialUI",
            icon: <i><SiMaterialui /></i>,
            color: "text-yellow-500",
        },
        {
            id: 6,
            name: "Framer Motion",
            icon: <i><FiFramer /></i>,
            color: "text-purple-500",
        },
    ];

    const tools = [
        {
            id: 1,
            name: "Firebase",
            icon: <i><SiFirebase /></i>,
            color: "text-yellow-500",
        },
        {
            id: 2,
            name: "Heroku",
            icon: <i><SiHeroku /></i>,
            color: "text-blue-500",
        },
        {
            id: 3,
            name: "Github",
            icon: <i><FaGithub /></i>,
            color: "text-green-500",
        },
        {
            id: 4,
            name: "Vs Code",
            icon: (
                <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 256 256"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                >
                    <g>
                        <path
                            d="M191.97885,0 L191.97885,219.867316 L0,191.353848 L191.97885,255.998083 L255.97885,229.374998 L255.97885,30.592308 L256,30.5826932 L255.97885,30.5403853 L255.97885,26.6250001 L191.97885,0 Z M124.796158,37.4576925 L65.9942314,95.5826932 L30.5923079,68.9211553 L16.0019234,73.7942316 L52.0192315,109.398076 L16.0019234,145.000006 L30.5923079,149.875005 L65.9942314,123.211541 L65.9961553,123.211541 L124.794228,181.332699 L160.011538,166.369233 L160.011538,52.4211546 L124.796158,37.4576925 Z M124.794228,78.9307702 L124.794228,139.857695 L84.340386,109.394236 L124.794228,78.9307702 Z"
                            fill="#016EC5"
                        ></path>
                    </g>
                </svg>
            ),
            color: "text-yellow-500",
        },
        {
            id: 5,
            name: "Netlify",
            icon: <i><SiNetlify /></i>,
            color: "text-red-500",
        },
        {
            id: 6,
            name: "Dev Tool",
            icon: <i><FaChrome /></i>,
            color: "text-blue-500",
        },
        {
            id: 7,
            name: "Figma",
            icon: <i><FaFigma /></i>,
            color: "text-teal-500",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero mb-32"
        >
            <div id='skills'>
                <h1 className='mb-4 text-3xl font-bold' >Skills</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    <div className="card bg-forest">
                        <span className='text-green-500 m-2 text-sm'>EXPERTISE</span>
                        <div className="flex flex-wrap justify-center gap-5 pb-5">
                            {
                                expertise.map(skill => <SkillCard
                                    key={skill.id}
                                    skill={skill}
                                ></SkillCard>)
                            }
                        </div>
                    </div>

                    <div className="card bg-forest drop-shadow-lg text-neutral-content">
                        <span className='text-green-500 m-2 text-sm'>COMFORTABLE</span>
                        <div className="flex flex-wrap justify-center gap-5 pb-5">
                            {
                                comfortable.map(skill => <SkillCard
                                    key={skill.id}
                                    skill={skill}
                                ></SkillCard>)
                            }
                        </div>
                    </div>
                    <div className="card bg-forest drop-shadow-lg text-neutral-content">
                        <span className='text-green-500 m-2 text-sm'>FAMILIAR</span>
                        <div className="flex flex-wrap justify-center gap-5 pb-5">
                            {
                                familiar.map(skill => <SkillCard
                                    key={skill.id}
                                    skill={skill}
                                ></SkillCard>)
                            }
                        </div>
                    </div>
                    <div className="card bg-forest drop-shadow-lg text-neutral-content">
                        <span className='text-green-500 m-2 text-sm'>TOOLS</span>
                        <div className="flex flex-wrap justify-center gap-5 pb-5">
                            {
                                tools.map(skill => <SkillCard
                                    key={skill.id}
                                    skill={skill}
                                ></SkillCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default Skills;