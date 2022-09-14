import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GrStar } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';
import RoomDetailsBanner from './RoomDetailsBanner';
import { AiOutlineCheck } from "react-icons/ai";
import useFetch from '../../hooks/useFetch';

import icon1 from '../../images/icons/icon7.png'
import icon2 from '../../images/icons/icon8.png'
import icon3 from '../../images/icons/icon9.png'
import icon4 from '../../images/icons/icon10.png'
import icon5 from '../../images/icons/icon11.png'
import icon6 from '../../images/icons/icon12.png'
import Spinner from '../Shared/Spinner';
import CheckForm from '../Booking/CheckForm';
import Footer from '../Home/Footer';

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
    const { data, loading } = useFetch(`https://sultan-hotel-1.onrender.com/api/rooms/find/${roomId}`)
    console.log(data);
    const { title, extraBeds, pets, checkIn, checkOut, instructions, description } = data
    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <RoomDetailsBanner />
            <div className=' lg:w-[1200px] mx-auto py-28'>
                <div className='flex text-xl mb-4 text-secondary'>
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                    <GrStar />
                </div>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>{title}</h2>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>
                        {description?.map((desc, index) => (
                            <div key={index} className='mb-6'>
                                <p className='text-xl text-[#777] tracking-wide'>{desc}</p>
                            </div>
                        ))}
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
                        <a href='#CheckRoom' style={{ letterSpacing: '2px' }} className='py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300'>Check Out</a>
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
            <CheckForm></CheckForm>
            <Footer/>
        </div>
    );
};

export default RoomDetails;