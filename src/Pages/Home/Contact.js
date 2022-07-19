import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='py-10 my-16'>
            <div className='text-center mb-12'>
                <h2 className='text-xl text-primary font-bold'>Contact Us</h2>
                <h1 className='text-4xl font-bold text-white'>Stay connected with Us</h1>
            </div>
            <div className='text-center'>
                <input type="email" placeholder="Your email" className="input input-bordered input-md w-full max-w-xs mb-4" /><br />
                <input type="text" placeholder="Your address" className="input input-bordered input-md w-full max-w-xs mb-4" /><br />
                <textarea className="textarea w-full max-w-xs mb-4" placeholder="Your message"></textarea><br />
                <PrimaryButton></PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;