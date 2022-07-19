import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u94fzar', 'template_yvw6bar', form.current, 'Mr0d1ZNZNJ-4wFsMt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero mb-32"
        >
            <div className="hero-content grid grid-cols-1 lg:grid-cols-5 p-0" id='contact'>
                <div className="text-center lg:text-left col-span-5 lg:col-span-2">
                    <div className='mb-5'>
                        <h1 className="text-2xl text-green-500 font-semibold mb-0">K M Mohiuddin Patwary</h1>
                        <p className='text-sm text-gray-500 mt-0'>| Mern Stack Developer |</p>
                        <p className="text-sm leading-relaxed my-4">I am available here. Connect with me via call or Send me an email if you think I can help you out with any of your web related projects.</p>
                        <p className=''><span className='text-sm text-gray-500'>Phone:</span> +8801680106149</p>
                        <p className=''><span className='text-sm text-gray-500'>Email:</span> developermohiuddin1@gmail.com</p>
                    </div>
                    <div className='mb-5 lg:mb-0'>
                        <h1 className="text-sm text-green-500">Search me</h1>
                        <div className='grid grid-cols-4'>
                            <a className='lg:ml-0 mx-auto' target='_blank' href="https://www.linkedin.com/in/k-m-mohiuddin-patwary/"><img className='hover:scale-110' src="images/linkedin.svg" alt="my LinkedIn" /></a>
                            <a className='lg:ml-0 mx-auto' target='_blank' href="https://github.com/mohiuddin2721"><img className='hover:scale-110' src="images/github.svg" alt="my GitHub" /></a>
                            <a className='lg:ml-0 mx-auto' target='_blank' href="https://www.facebook.com/mohiuddin.shawon.583/"><img className='hover:scale-110' src="images/facebook.svg" alt="my Facebook" /></a>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-base-100 col-span-5 lg:col-span-3">
                    <form
                        ref={form} onSubmit={sendEmail}
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="user_name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="user_email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your valuable message</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your message"
                                name="message"
                                className="input input-bordered h-20"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Send Email" />
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;