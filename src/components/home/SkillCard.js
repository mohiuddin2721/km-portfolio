import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
    const { color, icon, name } = skill;
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10 }}
        >
            <div>
                <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
                    <span className="mr-1">{name}</span>
                    <span className={`${color} mr-2`}>{icon}</span>
                </p>
            </div>
        </motion.div>


    );
};

export default SkillCard;