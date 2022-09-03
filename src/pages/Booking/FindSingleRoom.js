import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { GrStar } from 'react-icons/gr';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import img1 from '../../images/banner/6.jpg'
import Spinner from '../Shared/Spinner';
import Pricing from './Pricing';

const FindSingleRoom = () => {
    const location = useLocation()
    const [date, setDate] = useState(location.state.date)
    const [option, setOption] = useState(location.state.option)
    const id = location?.pathname.split('/')[2]
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/reviewRules/${id}`, { state: { date, option } })
    }

    const { data, loading } = useFetch(`http://localhost:5000/api/rooms/find/${id}`)
    const {
        _id,
        pets,
        shift,
        title,
        price,
        photos,
        checkIn,
        checkOut,
        extraBeds,
        description,
        instructions,
        roomNumbers } = data

    if (loading) {
        <Spinner></Spinner>
    }
    return (
        <div>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <Navbar></Navbar>


                <div className='text-left text-white w-[1150px] py-32 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>LUXURY HOTEL</p>
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Booking Info</h2>
                </div>

            </div>
            <div className='w-[1100px] mx-auto pt-28 pb-20'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl mb-3 text-black'>{title}</h2>
                </div>
                <div className='flex justify-center w-1/4 mb-10'>
                    <img src={photos} alt="" />
                </div>

                <div className='flex text-xl mb-4 text-secondary'>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                </div>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-3'>LUXURY HOTEL</p>
                <div className='grid grid-cols-2 space-x-20'>
                    <div className=''>
                        {description?.map((desc, index) => (
                            <div key={index} className='mb-3'>
                                <p className='text-lg text-[#777] tracking-wide'>{desc}</p>
                            </div>
                        ))}
                        <div className='flex space-x-20'>
                            <div className='space-y-3'>
                                <h2 className='text-xl'>Check-in</h2>
                                {
                                    checkIn?.map((i, index) => <p className='tracking-wide flex items-center text-lg text-[#777]' key={index}><AiOutlineCheck className='mr-4 text-primary' />{i}</p>)
                                }
                            </div>
                            <div className='mb-4 space-y-3'>
                                <h2 className='text-xl'>Check Out</h2>
                                {
                                    checkOut?.map((i, index) => <p className='tracking-wide flex items-center text-lg text-[#777]' key={index}><AiOutlineCheck className='mr-4 text-primary' />{i}</p>)
                                }
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-2xl'>Special check-in instructions</h2>
                            <p className='text-lg text-[#777] my-4 tracking-wide'>{instructions}</p>
                            <h2 className='text-2xl'>Pets</h2>
                            <p className='text-lg text-[#777] my-3 tracking-wide'>{pets}</p>
                            <h2 className='text-2xl'>Children and extra beds</h2>
                            <p className='text-lg text-[#777] my-4 tracking-wide'>{extraBeds}</p>
                        </div>
                    </div>

                    <div className='w-11/12'>
                        <div className='shadow-xl p-8'>
                            <Pricing
                                date={date}
                                price={price}
                                shift={shift}
                                option={option}
                                roomNumbers={roomNumbers}
                            />
                            <button onClick={() => handleClick(_id)} className='btn w-full mt-6 btn-primary rounded-none text-white items-center'>Book Now or Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindSingleRoom;