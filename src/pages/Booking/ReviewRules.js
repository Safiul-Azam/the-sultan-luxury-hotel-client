import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import img1 from '../../images/banner/6.jpg'
import Spinner from '../Shared/Spinner';
import Pricing from './Pricing';
import { format } from 'date-fns';
import {IoLogoNoSmoking} from 'react-icons/io'
import {GiPartyFlags} from 'react-icons/gi'
import {MdPets,MdNoDrinks} from 'react-icons/md'
import {ImManWoman} from 'react-icons/im'

const ReviewRules = () => {
    const location = useLocation()
    const [date, setDate] = useState(location.state.date)
    const [option, setOption] = useState(location.state.option)
    const id = location?.pathname.split('/')[2]
    console.log(location);
    const { data, loading } = useFetch(`http://localhost:5000/api/rooms/find/${id}`)
    const {
        _id,
        shift,
        price,
        roomNumbers } = data

    if (loading) {
        <Spinner></Spinner>
    }
    console.log(date[0].endDate.getDate().toDate);
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
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Review Room Rules</h2>
                </div>

            </div>
            <div className='w-[1100px] mx-auto pt-28 pb-20'>
                <div className='grid grid-cols-2 space-x-20'>
                    <div className=''>
                        <h2 style={{ lineHeight: '30px' }} className='text-4xl my-4'>Review Hotel Rules</h2>
                        <h2 className='text-xl font-bold'>Thank You for Reserved 7 Night to stay</h2>
                        <div className='flex space-x-24 my-5'>
                            <div className='flex items-center space-x-5'>
                                <div className='bg-primary text-center text-white px-2 py-1'>
                                    <p className='text-sm leading-none uppercase'>{`${format(date[0].startDate, 'MMM')}`}</p>
                                    <p>{`${format(date[0].startDate, 'd')}`}</p>
                                </div>
                                <div>
                                    <p className='text-lg'>{`${format(date[0].startDate, 'iiii')}`} Check in</p>
                                    <p className='text-lg'>After 12:00 pm</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-5'>
                                <div className='bg-primary text-center text-white px-2 py-1'>
                                    <p className='text-sm leading-none uppercase'>{`${format(date[0].endDate, 'MMM')}`}</p>
                                    <p>{`${format(date[0].endDate, 'd')}`}</p>
                                </div>
                                <div>
                                    <p className='text-lg'>{`${format(date[0].endDate, 'iiii')}`} Check Out</p>
                                    <p className='text-lg'>11:00 pm</p>
                                </div>
                            </div>
                        </div>
                        <span className='text-lg'>Self Check in with building staff</span>
                        <hr className='my-2 border-1 border-primary' />
                        <div className=''>
                            <h2 className='my-4 text-lg font-semibold'>Things to keep in mind</h2>
                            <div className='space-y-3 text-lg'>
                                <p>Suitable for children and infants</p>
                                <p><MdPets/>pets not allowed</p>
                                <p><GiPartyFlags/>No parties and events without permission</p>
                                <p className='flex items-center'><IoLogoNoSmoking className='text-red-300 text-3xl mr-2'/>Smoking not allowed</p>
                                <p><MdNoDrinks/>Alcohol not allowed</p>
                                <p><ImManWoman/>Can't stay in hotel any guests without counted</p>
                            </div>
                        </div>
                        <button className='btn w-1/3 mt-6 btn-primary rounded-none text-white items-center'>Agree & continue</button>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewRules;