import React from 'react';
import Navbar from '../Shared/Navbar';
import photo from '../../images/banner/6.jpg'
import { useLocation } from 'react-router-dom';

const FindRoom = () => {

    const location = useLocation()
    console.log(location);
    return (
        <div>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${photo})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <Navbar></Navbar>


                <div className='text-left text-white w-[1150px] py-32 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>LUXURY HOTEL</p>
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Finding Room</h2>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default FindRoom;