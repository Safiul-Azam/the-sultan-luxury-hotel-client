import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrStar } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';
import RoomDetailsBanner from './RoomDetailsBanner';
import { AiOutlineCheck } from "react-icons/ai";

const RoomDetails = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/roomsSuites/${roomId}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data))
    }, [roomId])
    console.log(roomDetails);
    const { roomName, extraBeds, pets, checkIn, checkOut, instructions, description1, description2 } = roomDetails
    return (
        <div>
            <RoomDetailsBanner />
            <div className='w-[1200px] mx-auto py-28'>
                <div className='flex text-xl mb-4 text-secondary'>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                </div>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>{roomName}</h2>
                <div className='grid grid-cols-8'>
                    <div className='col-span-5'>
                        <p className='text-xl text-[#777] tracking-wide'>{description1}</p>
                        <p className='text-xl text-[#777] my-12 tracking-wide'>{description2}</p>
                        <div className='flex space-x-32'>
                            <div className='space-y-5'>
                                <h2 className='text-2xl'>Check-in</h2>
                                {
                                    checkIn?.map((i, index) => <p className='tracking-wide flex items-center text-xl text-[#777]' key={index}><AiOutlineCheck className='mr-4 text-primary' />{i}</p>)
                                }
                            </div>
                            <div className='mb-10 space-y-5'>
                                <h2 className='text-2xl'>Check Out</h2>
                                {
                                    checkOut?.map((i, index) => <p className='tracking-wide flex items-center text-xl text-[#777]' key={index}><AiOutlineCheck className='mr-4 text-primary' />{i}</p>)
                                }
                            </div>
                        </div>
                        <div className='mb-16'>
                            <h2 className='text-2xl'>Special check-in instructions</h2>
                            <p className='text-xl text-[#777] my-6 tracking-wide'>{instructions}</p>
                            <h2 className='text-2xl'>Pets</h2>
                            <p className='text-xl text-[#777] my-6 tracking-wide'>{pets}</p>
                            <h2 className='text-2xl'>Children and extra beds</h2>
                            <p className='text-xl text-[#777] my-6 tracking-wide'>{extraBeds}</p>
                        </div>
                        <Link to='/' style={{ letterSpacing: '2px' }} className='py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300'>Check Out</Link>
                    </div>
                    <div className='ml-36'>
                        <h2 className='text-2xl'>Amenities</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoomDetails;