import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='text-center items-center h-screen'>
            <p className='font-bold m-0'><span className='text-4xl'>Blogs</span> <span className='text-2xl text-green-500'>are coming soon...</span></p>
            <div className="flex flex-col w-80 mx-auto m-0">
                <div className="divider m-1  bg-green-500 h-px"></div>
            </div>
            <p className=''>Keep an eye on my portfolio</p>
            <Link to='/home' className='btn btn-sm btn-outline mt-2'>Back to home</Link>
        </div>
    );
};

export default Blog;