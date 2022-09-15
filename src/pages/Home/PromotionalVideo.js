import React from 'react';
import { GrStar } from 'react-icons/gr';
import { BsPlay } from 'react-icons/bs';
import img from '../../images/banner/2.jpg'

const PromotionalVideo = () => {
    return (
        <div className='text-center static text-white' style={
            {
                background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }
        }>
            <div className='py-28 px-4'>
                <div className='flex justify-center text-xl mb-6 text-secondary'>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <p style={{ letterSpacing: '6px' }} className='text-xm mb-4'>THE SULTAN LUXURY HOTEL</p>
                    <h2 className='text-5xl mb-6'>Promotional Video</h2>
                    <div className='border rounded-full p-1 border-primary group'>
                        <button className='border p-4 bg-white group-hover:bg-transparent rounded-full group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500'>
                            <BsPlay className='text-5xl group-hover:text-white text-primary group-hover:duration-300 group-hover:ease-in ease-in duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionalVideo;