import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GrStar } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const WellNess = () => {
    return (
        <div className='container mx-auto my-24'>
            <div className='flex text-xl mb-4 text-secondary'>
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
            </div>
            <p style={{ letterSpacing: '5px' }} className='text-lg text-gray-600 uppercase mb-4'>SO MANY WAYS TO UNWIND</p>
            <h2 className='text-5xl mb-7 text-[#222]'>Spa & Wellness</h2>
            <p className='text-xl mb-8 text-gray-700'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent volutpat nibh ac sodales sodales. Nunc tincidunt erat sed nisi faucibus, eget sagittis libero imperdiet. Nunc risus magna, imperdiet gravida ultricies in, aliquam a tortor. Vestibulum tristique posuere magna, quis elementum neque luctus non. Aenean sed arcu efficitur, commodo justo ut, accumsan massa. Vivamus ac risus in felis imperdiet mollis id sit amet odio. Vestibulum dignissim finibus diam a commodo. Nulla quis miss dururana egestas semper. In sit amet nunc sed felis lacinia tempus sed quis ipsum.</p>
            <div className='flex justify-start items-center'>
                <FiPhoneCall className='text-4xl mr-8 text-primary' />
                <Link to='/' className='text-lg text-gray-700'>Reservation <p className='block text-2xl text-primary tracking-widest'>855 100 4444</p></Link>
            </div>
        </div>
    );
};

export default WellNess;