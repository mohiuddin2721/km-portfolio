import React from 'react';
import { motion } from 'framer-motion';
import Service from './Service';
import { FcDataConfiguration } from 'react-icons/fc';
import { BsCodeSlash } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiResponsive } from 'react-icons/di';
import { AiOutlineBug } from 'react-icons/ai';

const Services = () => {
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch("jsons/services.json")
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);

    const services = [
        {
            id: 1,
            icon: <i><FcDataConfiguration /></i>,
            title: "Web Design",
            color: "blue",
            description: "I design attractive , modern and eye catching websites which catches Visitor's Eye."
        },
        {
            id: 2,
            icon: <i><BsCodeSlash /></i>,
            title: "Mern Development",
            color: "blue",
            description: "I'm a MERN Developer .I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer."
        },
        {
            id: 3,
            icon: <i><DiResponsive /></i>,
            title: "Responsive Design",
            color: "blue",
            description: "I also design Responsive Websites for that You can use your website in any devices."
        },
        {
            id: 4,
            icon: <i><FaReact /></i>,
            title: "React Development",
            color: "teal",
            description: "I'm A React Developer. I have created many single page application using React.JS. I can be your React Developer."
        },
        {
            id: 5,
            icon: <i><IoLogoJavascript /></i>,
            title: "Javascript Development",
            color: "yellow",
            description: "I'm a Javascript Developer. I have created many website using Javascript. I can be your Javascript Developer."
        },
        {
            id: 6,
            icon: <i><AiOutlineBug /></i>,
            title: "Bugs Fix",
            color: "green",
            description: "I can fix any bug in any of the technologies mentioned above. Or any other problem I can fix."
        },
    ];

    return (
        <motion.div
            id='services'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mb-32"
        >
            <div className='mb-10'>
                <p className='uppercase text-sm text-green-500'>Services</p>
                <h3 className='text-5xl font-semibold'>What I do:</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </motion.div>
    );
};

export default Services;