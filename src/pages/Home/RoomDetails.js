import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrStar } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';
import RoomDetailsBanner from './RoomDetailsBanner';

const RoomDetails = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/roomsSuites/${roomId}`)
            .then(res => res.json())
            .then(data => setRoomDetails(data))
    }, [roomId])
    console.log(roomDetails);
    const { roomName, extraBeds,pets, checkIn, checkOut, instructions, description1, description2 } = roomDetails
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
                <div>
                    <div>
                        <p>{description1}</p>
                        <p>{description2}</p>
                        <div>
                            <div>
                                <h2>Check-in</h2>
                                {
                                    checkIn?.map((i,index) => <p key={index}>{i}</p>)
                                }
                            </div>
                            <div>
                                <h2>Check Out</h2>
                                {
                                    checkOut?.map((i,index) => <p key={index}>{i}</p>)
                                }
                            </div>
                            <div className='mb-5'>
                                <h2>Special check-in instructions</h2>
                                <p>{instructions}</p>
                                <h2>Pets</h2>
                                <p>{pets}</p>
                                <h2>Children and extra beds</h2>
                                <p>{extraBeds}</p>
                            </div>
                                <Link to='/' style={{ letterSpacing: '2px' }} className=' py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300'>Check Out</Link>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoomDetails;