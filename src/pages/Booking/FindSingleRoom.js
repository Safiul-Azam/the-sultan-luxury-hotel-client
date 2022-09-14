import React from "react"
import { AiOutlineCheck } from 'react-icons/ai';
import { GrStar } from 'react-icons/gr';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import img1 from '../../images/banner/6.jpg'
import Spinner from '../Shared/Spinner';
import Pricing from './Pricing';
import { SearchContext } from '../../context/SearchContext';
import { useContext, useState } from 'react';
import { format } from 'date-fns';
import Footer from "../Home/Footer";

const FindSingleRoom = () => {
    const [selectedRoom, setSelectedRoom] = useState([])
    const location = useLocation()
    const id = location?.pathname.split('/')[2]
    console.log(id);
    const navigate = useNavigate()

    const { data, loading, reFetch } = useFetch(`https://sultan-hotel-1.onrender.com/api/rooms/find/${id}`)

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

    // selected
    const { dates } = useContext(SearchContext)
    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())
        const datesRange = []
        while (date <= end) {
            datesRange.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return datesRange
    }
    const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
            allDates.includes(new Date(date).getTime())
        );

        return !isFound;
    };
    const handleSelected = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedRoom(checked ? [...selectedRoom, value] : selectedRoom.filter(item => item !== value))
    }
    const handleClick = (id) => {
        navigate(`/reviewRules/${id}`, { state: { selected: selectedRoom, allDates } })
    }
    return (
        <>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <Navbar></Navbar>


                <div className='text-left text-white container py-32 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>LUXURY HOTEL</p>
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Booking Info</h2>
                </div>

            </div>
            <div className='container mx-auto pt-8 pb-20 grid grid-cols-2 space-x-24'>

                <div className=''>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-3xl mb-3 text-black'>{title}</h2>
                    </div>
                    <div className='flex justify-center w-1/2 mb-5'>
                        <img src={photos} alt="" />
                    </div>
                    <div className="w-full mt-3">
                        <span className="label-text text-2xl font-bold">Choose Room Number</span>
                        <div className="w-full rounded-none flex items-center space-x-5">
                            {roomNumbers?.map(roomNumber => (
                                <>
                                    <div key={roomNumber._id} className='py-2 text-4xl'>
                                        <label>{roomNumber.number}</label>
                                        <input type="checkbox" disabled={!isAvailable(roomNumber)} onChange={handleSelected} value={roomNumber._id} />
                                        {!isAvailable(roomNumber) && <p className='text-sm text-red-500'>{format(dates[0]?.startDate, 'MM-dd')} to {format(dates[0]?.startDate, 'MM-dd-yyyy')} Already Booked</p>}
                                    </div>

                                </>

                            ))}
                        </div>
                    </div>

                    <div className='flex text-xl mb-4 text-secondary'>
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                    </div>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-3'>LUXURY HOTEL</p>
                    {description?.map((desc, index) => (
                        <div key={index} className='mb-3'>
                            <p className='text-lg text-[#777] tracking-wide'>{desc}</p>
                        </div>
                    ))}
                    <div className='flex space-x-20'>
                        <div className='space-y-3'>
                            <h2 className='text-xl'>Check-in</h2>
                            {
                                checkIn?.map((i, index) => <p 
                                className='tracking-wide flex items-center text-lg text-[#777]' key={index}><AiOutlineCheck className='mr-4 text-primary' />{i}</p>)
                            }
                        </div>
                        <div className='mb-4 space-y-3'>
                            <h2 className='text-xl'>Check Out</h2>
                            {
                                checkOut?.map((i, index) => <p key={index} className='tracking-wide flex items-center text-lg text-[#777]'><AiOutlineCheck className='mr-4 text-primary' />{i}</p>)
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
                    <div className='shadow-lg p-8 mt-16'>
                        <Pricing
                            title={title}
                            price={price}
                            shift={shift}
                            selectedRoom={selectedRoom}
                            roomNumbers={roomNumbers}
                            photo={photos}
                            id={data._id}
                            loading={loading}
                            reFetch={reFetch}
                        />
                        <button disabled={selectedRoom.length === 0} onClick={() => handleClick(id)} style={{ letterSpacing: '2px' }} className='mt-10 w-full py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 uppercase'>Book Now or Reserve</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default FindSingleRoom;