import React from 'react';
import { GrStar } from 'react-icons/gr';
import Image1 from '../../images//photo/book-4.jpg'
import Image2 from '../../images/photo/book-6-2.jpg'
import { FiPhoneCall } from "react-icons/fi";

const EnjoyLuxury = () => {
    return (
        <div className="lg:mb-24 mb-12 mt-10 hero min-h-screen lg:w-[1150px] mx-auto bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse lg:relative justify-center">
                <img src={Image1} className="lg:w-1/4 w-full shadow-2xl" alt='' />
                <img src={Image2} className="lg:w-1/4 w-full shadow-2xl lg:relative top-24" alt='' />
                <div className=''>
                    <div className='flex text-xl mb-4 text-secondary'>
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                    </div>
                    <p style={{ letterSpacing: '6px' }} className='lg:text-lg text-sm uppercase mb-4'>THE SULTAN LUXURY HOTEL</p>
                    <h2 className='lg:text-6xl text-3xl mb-7 text-black'>Enjoy a Luxury Experience</h2>
                    <p className='text-xl mb-4 text-gray-700'>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                    <p className='text-xl mb-6 text-gray-700'>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                    <div className='flex justify-start items-center'>
                        <FiPhoneCall className='text-4xl mr-8 text-primary' />
                        <p className='text-lg text-gray-700'>Reservation <p className='block text-2xl text-primary tracking-widest'>855 100 4444</p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnjoyLuxury;