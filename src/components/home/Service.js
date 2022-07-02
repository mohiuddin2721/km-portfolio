import React from 'react';
import { motion } from 'framer-motion';

const Service = ({ service }) => {
    const { title, description, icon, color } = service;

    return (
        <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
            className="card hover:shadow hover:bg-stone-900 hover:shadow-current"
        >
 {/* bg-base-100 */}
            <div className='p-10'>
                <div>
                    <i className={`text-4xl text-${color}-500 mb-0`}>{icon}</i>
                </div>
                <h2 className="text-xl mb-5 mt-0">{title}</h2>
                <p className='mt-0'>{description}</p>
            </div>
        </motion.div>
    );
};

export default Service;