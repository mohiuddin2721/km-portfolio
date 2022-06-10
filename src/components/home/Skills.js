import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='mb-12 mt-0'>
            <h1 className='mb-4 text-3xl font-bold' >Skills</h1>
            <p>HTLM5 & CSS3</p> <progress className="progress progress-success w-full mb-2" value="90" max="100"></progress>
            <p>Frontend Design, BOOTSTRAP & TAILWIND</p> <progress className="progress progress-success w-full mb-2" value="92" max="100"></progress>
            <p>JAVASCRIPT & REACT JS</p> <progress className="progress progress-success w-full mb-2" value="90" max="100"></progress>
            <p>FIREBASE & JWT TOKEN</p> <progress className="progress progress-success w-full mb-2" value="95" max="100"></progress>
            <p>MONGODB & NODE JS</p> <progress className="progress progress-success w-full mb-2" value="75" max="100"></progress>
        </div>
    );
};

export default Skills;