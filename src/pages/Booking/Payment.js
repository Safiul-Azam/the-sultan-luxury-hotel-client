import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import Pricing from './Pricing';
import img1 from '../../images/banner/3.jpg'
import axios from 'axios';
import Spinner from '../Shared/Spinner';

// const stripePromise = loadStripe('pk_test_51L1lwNK8cblwyB4icoDXqCV5LRsqz0BUpH0hPggBa0b10LucJ4r91UIcNBp0DBWqe94yOFFslBJmqMDKdZNesRZ400Ewz7t6jX');

const Payment = () => {
    const location = useLocation()
    console.log(location);
    const id = location?.pathname.split('/')[2]
    const [allDates, setAllDates] = useState(location.state.allDates)
    const [selectedRoom, setSelectedRoom] = useState(location.state.selected)
    const { data, loading, reFetch } = useFetch(`http://localhost:5000/api/rooms/find/${id}`)
    const {
        shift,
        price,
        photos,
        title,
        roomNumbers } = data
        console.log(allDates);
        if(loading){
            return <Spinner />
        }
    const handleClick = async (id) => {
        try {
            await Promise.all(selectedRoom.map(roomId => {
                const res = axios.put(`http://localhost:5000/api/rooms/availability/${roomId}`, { dates: allDates })
                return res.data
            }))
        } catch (err) { }
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
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Payment Selection</h2>
                </div>
            </div>
            <div className='w-[1100px] mx-auto my-20'>
                <div className='grid grid-cols-2 space-x-10'>
                    <div className=''>
                        <div className='border'>
                            <button onClick={() => handleClick(id)} style={{ letterSpacing: '2px' }} className='mt-10 w-full py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 uppercase'>Complete your Booking</button>
                        </div>
                    </div>
                    <div>
                        <div className='shadow-lg p-8'>
                            <Pricing
                                title={title}
                                price={price}
                                shift={shift}
                                roomNumbers={roomNumbers}
                                photo={photos}
                                selectedRoom={selectedRoom}
                                reFetch={reFetch}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;