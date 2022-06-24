import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("jsons/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mb-32"
        >
            <div id='projects' className='mb-10'>
                <h3 className='text-5xl font-semibold'>My Projects:</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </motion.div>
    );
};

export default Projects;