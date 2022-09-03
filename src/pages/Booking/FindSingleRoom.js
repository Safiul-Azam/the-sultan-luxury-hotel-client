import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { GrStar } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import img1 from '../../images/banner/6.jpg'
import Spinner from '../Shared/Spinner';
import { format } from 'date-fns';
import { AiOutlineArrowRight } from 'react-icons/ai';

const FindSingleRoom = () => {
    const location = useLocation()
    const [date, setDate] = useState(location.state.date)
    const [option, setOption] = useState(location.state.option)
    const id = location?.pathname.split('/')[2]
    console.log(id);

    const { data, loading } = useFetch(`http://localhost:5000/api/rooms/find/${id}`)
    const {
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
                    <div className='w-3/4'>
                        <div className='border shadow-xl p-8'>
                            <p className='text-lg capitalize'>${price} / {shift}</p>
                            <div className='flex text-xs mb-4 items-center text-secondary'>
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <GrStar />
                                <p className='text-sm ml-2 text-black'>(20 reviews)</p>
                            </div>
                            <div className="w-full">
                                <span className="label-text text-lg">date</span>
                                <span className="input input-bordered w-full rounded-none text-lg flex items-center justify-between">{`${format(date[0].startDate, 'MM-dd-yyyy')}`}<AiOutlineArrowRight />  {`${format(date[0].endDate, 'MM-dd-yyyy')}`}</span>
                            </div>
                            <div className="w-full">
                                <span className="label-text text-lg">adult</span>
                                <span className="input input-bordered w-full rounded-none text-lg flex items-center justify-between">{option.adult}</span>
                            </div>
                            <div className=" w-full">
                                <span className="label-text text-lg">date</span>
                                <span className="input input-bordered w-full rounded-none text-lg flex items-center justify-between">{option.children}</span>
                            </div>
                            <div className="w-full mt-3">
                                <span className="label-text text-lg">Room Number</span>
                                <div className="w-full rounded-none text-lg flex items-center space-x-5">
                                    {roomNumbers?.map(roomNumber => (
                                    <div key={roomNumber._id}>
                                        <label>{roomNumber.number}</label>
                                        <input type="checkbox" value={roomNumber._id} />
                                    </div>
                                ))}
                                </div>
                            </div>
                            <div className='flex space-x-10'>
                                
                            </div>
                            <div className='border p-3 w-full mt-3 space-y-2 text-lg'>
                                <p className='text-lg font-semibold text-secondary'>Thank You for Reserved 7 Night to stay</p>
                                <div className='flex justify-between'>
                                    <p className='flex justify-between'>${`${price} X 7`}</p>
                                    <p>{'1050'}</p>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <p>Children 4</p>
                                    <p>10 X 4 = $40</p>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <p>Cleaning fee</p>
                                    <p>$10</p>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <p>Service fee</p>
                                    <p>$25</p>
                                </div>
                                <hr />
                                <div className='flex justify-between font-bold'>
                                    <p>total</p>
                                    <p>{'1125'}</p>
                                </div>
                            </div>
                            <button className='btn w-full mt-6 btn-primary rounded-none text-white items-center'>Book Now or Reserve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindSingleRoom;