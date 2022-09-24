import React from 'react';
import Navbar from '../Shared/Navbar';
import slider1 from '../../images/banner/5.jpg'

const Authentication = () => {
    return (
        <>
            <Navbar />
            <div className='pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${slider1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <div className='text-left text-white container py-24 mx-auto p-5'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase lg:mb-6 mb-2'>New to Wooden tools</p>
                    <h2 style={{ lineHeight: '30px' }} className='lg:text-6xl text-4xl'>Login / Sign Up</h2>
                </div>
            </div>
        </>
    );
};

export default Authentication;