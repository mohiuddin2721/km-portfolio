import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BiCommentDetail } from 'react-icons/bi';
import { TbLivePhoto } from 'react-icons/tb';

const Project = ({ project }) => {
    const { name, type, image, stack, liveLinks, id } = project;

    console.log(liveLinks);

    return (
        <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl">

            <div className="card-body">
                <img src={image} alt="Projects pic" />
                <div className=''>
                    <h2 className="text-sm text-green-500 mb-5">{name} <span className='text-sm text-green-500 badge h-auto'>| {stack} |</span></h2>
                    <p className=''>{type}</p>
                </div>
                <div className="flex space-x-48 mt-0">
                    <Link to={`/project/:${id}`} className='text-sm btn btn-active btn-xs w-22 inline-block' >Details<BiCommentDetail className='text-blue-500 ml-1 inline-block'></BiCommentDetail></Link>
                    {
                        liveLinks.map(live => <a key={live.id} href={live.url} className='text-sm btn btn-active btn-xs text-end'><TbLivePhoto className='text-blue-500 mr-1'></TbLivePhoto>Live</a>)
                    }
                    
                </div>
            </div>
        </motion.div >
    );
};

export default Project;