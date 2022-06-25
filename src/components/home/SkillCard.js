import React from 'react';
// import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
    const { color, icon, name } = skill;
    return (
        <div>
            <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300">
                <span className="mr-1">{name}</span>
                <span className={`${color} mr-2`}>{icon}</span>
            </p>
        </div>

    );
};

export default SkillCard;