import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import Pricing from './Pricing';
import img1 from '../../images/banner/3.jpg'
import axios from 'axios';
import Spinner from '../Shared/Spinner';
import { toast } from 'react-toastify';
import { SearchContext } from '../../context/SearchContext';
import { format } from 'date-fns';
import Footer from '../Shared/Footer';

const Payment = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location?.pathname.split('/')[2]
    const [allDates, setAllDates] = useState(location.state.allDates)
    const [selectedRoom, setSelectedRoom] = useState(location.state.selected)
    const { data, loading, reFetch } = useFetch(`https://sultan-hotel-1.onrender.com/api/rooms/find/${id}`)
    const { dates } = useContext(SearchContext)

    if (loading) {
        return <Spinner />
    }
    const handleClick = async (id) => {
        try {
            await Promise.all(selectedRoom.map(roomId => {
                const res = axios.put(`https://sultan-hotel-1.onrender.com/api/rooms/availability/${roomId}`, { dates: allDates })
                return res.data
            }))
            toast.success(<div className='text-lg text-green-600'>
                <h2>Your rooms is Booked</h2>
                <h2>{format(dates[0]?.startDate, 'MM-dd-yyyy')} to {format(dates[0]?.endDate, 'MM-dd-yyyy')}</h2>
            </div>)
            navigate('/')
        } catch (err) {
            toast(err?.message)
        }
    }
    return (
        <>
            <Navbar></Navbar>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <div className='text-left text-white container py-28 mx-auto px-3'>
                    <p className='text-lg uppercase mb-6 tracking-[5px]'>LUXURY HOTEL</p>
                    <h2 className='lg:text-6xl text-3xl leading-3'>Payment Selection</h2>
                </div>
            </div>
            <div className='lg:w-11/12 w-full mx-auto'>
                <div className='shadow-lg lg:p-8 p-3'>
                    <Pricing
                        data={data}
                        selectedRoom={selectedRoom}
                        reFetch={reFetch}
                    />
                    <button onClick={() => handleClick(id)} style={{ letterSpacing: '2px' }} className='mt-10 w-full py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 uppercase'>Complete your Booking</button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;