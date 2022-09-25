import React from 'react';
import Navbar from '../Shared/Navbar';
import GetInTouch from './GetInTouch';
import Footer from '../Shared/Footer'
import slider1 from '../../images/banner/5.jpg'

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${slider1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <div className='text-left text-white container py-28 mx-auto px-3'>
                    <p className='text-lg uppercase mb-6 tracking-[5px]'>GET IN TOUCH</p>
                    <h2 className='lg:text-6xl text-5xl leading-3'>Contact Us</h2>
                </div>
            </div>
            <GetInTouch></GetInTouch>
            <Footer/>
        </div>
    );
};

export default ContactUs;