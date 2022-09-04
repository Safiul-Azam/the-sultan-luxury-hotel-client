import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import Pricing from './Pricing';
import img1 from '../../images/banner/3.jpg'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1lwNK8cblwyB4icoDXqCV5LRsqz0BUpH0hPggBa0b10LucJ4r91UIcNBp0DBWqe94yOFFslBJmqMDKdZNesRZ400Ewz7t6jX');

const Payment = () => {
    const location = useLocation()
    const [date, setDate] = useState(location?.state?.date)
    const [option, setOption] = useState(location?.state?.option)
    const id = location?.pathname.split('/')[2]
    const { data, loading } = useFetch(`http://localhost:5000/api/rooms/find/${id}`)
    const {
        shift,
        price,
        photos,
        title,
        roomNumbers } = data
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
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                    <div>
                        <div className='shadow-lg p-8'>
                            <Pricing
                                title={title}
                                date={date}
                                price={price}
                                shift={shift}
                                option={option}
                                roomNumbers={roomNumbers}
                                photo={photos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;