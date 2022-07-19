import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='text-center mt-36 h-screen'>
            <div className='justify-center items-center'>
                <p className='font-bold m-0'><span className='text-4xl'>Blogs</span> <span className='text-2xl text-green-500'>are coming soon...</span></p>
                <div className="flex flex-col w-80 mx-auto m-0">
                    <div className="divider m-1  bg-green-500 h-px"></div>
                </div>
                <p className=''>Keep an eye on my portfolio</p>
                <Link to='/' className='btn btn-sm btn-outline mt-2'>Back to home</Link>
            </div>
        </div>
    );
};

export default Blog;