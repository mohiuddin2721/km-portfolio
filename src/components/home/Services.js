import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("jsons/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <motion.div
            id='expertise'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mb-32"
        >
            <div className='mb-10'>
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