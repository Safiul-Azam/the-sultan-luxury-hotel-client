import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrStar } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';
import RoomDetailsBanner from './RoomDetailsBanner';
import { AiOutlineCheck } from "react-icons/ai";

import icon1 from '../../images/icons/icon7.png'
import icon2 from '../../images/icons/icon8.png'
import icon3 from '../../images/icons/icon9.png'
import icon4 from '../../images/icons/icon10.png'
import icon5 from '../../images/icons/icon11.png'
import icon6 from '../../images/icons/icon12.png'
// https://i.ibb.co/Sc8xSZk/icon7.png
// https://i.ibb.co/WgQCrwz/icon8.png
// https://i.ibb.co/ZBshmBC/icon9.png
// https://i.ibb.co/mTmcvz7/icon10.png
// https://i.ibb.co/3kxr3c0/icon11.png
// https://i.ibb.co/WxnSzYX/icon12.png

const amenities = [
    { id: 1, img: icon1, text: '1-2 Persons' },
    { id: 2, img: icon2, text: 'Free Wifi' },
    { id: 3, img: icon3, text: '200 sqft room' },
    { id: 4, img: icon4, text: 'Breakfast' },
    { id: 5, img: icon5, text: 'Towels' },
    { id: 6, img: icon6, text: 'Swimming Pool' },
]

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
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>
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
                            <p className='text-xl text-[#777] my-4 tracking-wide'>{pets}</p>
                            <h2 className='text-2xl'>Children and extra beds</h2>
                            <p className='text-xl text-[#777] my-6 tracking-wide'>{extraBeds}</p>
                        </div>
                        <Link to='/' style={{ letterSpacing: '2px' }} className='py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300'>Check Out</Link>
                    </div>
                    <div className='ml-32 space-y-2'>
                        <h2 className='text-2xl mb-4'>Amenities</h2>
                        {
                            amenities.map(amenity => <div
                                key={amenity.id}
                            >
                                <div className='flex items-center space-x-3'>
                                    <img width={'25'} src={amenity.img} alt="" />
                                    <p className='text-lg tracking-wide text-[#777]'>{amenity.text}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;