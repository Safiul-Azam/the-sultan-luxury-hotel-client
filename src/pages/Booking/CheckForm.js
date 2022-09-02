import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GrStar } from 'react-icons/gr';
import img from '../../images/banner/2.jpg'
import sponsor1 from '../../images/sponsor/3.png'
import sponsor2 from '../../images/sponsor/4.png'
import sponsor3 from '../../images/sponsor/5.png'

const CheckForm = () => {
    return (
        <div className='pt-24' style={
            {
                background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }
        }>
            <div className=' relative'>
                <div className=' w-[1150px] mx-auto flex justify-between items-center'>
                    <div className=' w-2/5'>
                        <div className='flex text-secondary mb-1'>
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                        </div>
                        <h3 className='text-white text-2xl my-8'>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h3>
                        <div className='flex justify-start items-center text-white'>
                            <FiPhoneCall className='text-4xl mr-8' />
                            <p className='text-lg'>For information<p className='block text-2xl tracking-widest'>855 100 4444</p></p>
                        </div>
                    </div>
                    <div className='bg-[#F8F5F0] px-10 py-16 relative -bottom-20 shadow-sm'>
                        <p style={{ letterSpacing: '5px' }} className='text-sm text-primary uppercase mb-3'>ROOMS & SUITES</p>
                        <h2 className='text-2xl text-black'>Hotel Booking Form</h2>
                        <hr className='my-5' />
                        <form className='flex flex-col' action="">
                            <input className='py-4 px-10 mb-4' type="date" name="" id="" placeholder='Check out' />
                            <input className='py-4 px-10 mb-4' type="date" name="" id="" placeholder='Check out' />
                            <div className='grid grid-cols-2 gap-6 mb-10'>
                                <select className='py-4 px-10' value="Adult">
                                    <option>Adult</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <select className='py-4 px-10' value="Adult">
                                    <option>Children</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <input style={{ letterSpacing: '2px' }} className='py-4 px-8 text-lg text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 uppercase' type='submit' value="Check Availability" />
                        </form>
                    </div>
                </div>
                <div className='bg-white py-5'>
                    <div className='w-[1150px] mx-auto grid grid-cols-6'>
                        <img src={sponsor1} alt="" />
                        <img src={sponsor2} alt="" />
                        <img src={sponsor3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckForm;