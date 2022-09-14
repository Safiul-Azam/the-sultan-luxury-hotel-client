import React from 'react';
import Navbar from '../Shared/Navbar';
import GetInTouch from './GetInTouch';
import slider1 from '../../images/banner/5.jpg'

const ContactUs = () => {
    return (
        <div>
            <div className='pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${slider1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <Navbar></Navbar>
                <div className='text-left text-white container py-24 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>GET IN TOUCH</p>
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Contact Us</h2>
                </div>
            </div>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default ContactUs;