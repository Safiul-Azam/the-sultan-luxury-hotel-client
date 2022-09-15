import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../Shared/Navbar';
import img1 from '../../images/banner/6.jpg'
import Spinner from '../Shared/Spinner';
import Pricing from './Pricing';
import { format } from 'date-fns';
import { IoLogoNoSmoking } from 'react-icons/io'
import { GiPartyFlags } from 'react-icons/gi'
import { MdPets, MdNoDrinks, MdOutlineChildFriendly } from 'react-icons/md'
import { ImManWoman } from 'react-icons/im'
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import Footer from '../Shared/Footer';

const ReviewRules = () => {
    const location = useLocation()
    const id = location?.pathname.split('/')[2]
    const [allDates, setAllDates] = useState(location.state.allDates)
    const [selectedRoom, setSelectedRoom] = useState(location.state.selected)
    const navigate = useNavigate()
    const { data, loading, reFetch } = useFetch(`https://sultan-hotel-1.onrender.com/api/rooms/find/${id}`)
    const {
        _id,
        shift,
        price,
        photos,
        title,
        roomNumbers } = data

    const { dates } = useContext(SearchContext)
    // dates count system
    const MILLISECOND_PER_DAY = 1000 * 24 * 60 * 60
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime())
        const dayDiff = Math.ceil(timeDiff / MILLISECOND_PER_DAY)
        return dayDiff
    }
    const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate)
    //loading system
    if (loading) {
        return <Spinner></Spinner>
    }
    const handleClick = (id) => {
        navigate(`/payment/${id}`, {state:{allDates, selected: selectedRoom}})
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


                <div className='text-left text-white container py-32 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>LUXURY HOTEL</p>
                    <h2 style={{ lineHeight: '30px' }} className='text-6xl'>Review Room Rules</h2>
                </div>

            </div>
            <div className='container mx-auto pt-12 pb-20'>
                <div className='grid grid-cols-2 space-x-20'>
                    <div className=''>
                        <h2 style={{ lineHeight: '30px' }} className='text-4xl my-4'>Review Hotel Rules</h2>
                        <h2 className='text-xl font-bold'>Thank You for Reserved {days} Night to stay</h2>
                        <div className='flex space-x-20 my-6'>
                            <div className='flex items-center space-x-5'>
                                <div className='bg-primary text-center text-white px-2 py-1'>
                                    <p className='text-sm leading-none uppercase'>{`${format(dates[0]?.startDate, 'MMM')}`}</p>
                                    <p>{`${format(dates[0]?.startDate, 'd')}`}</p>
                                </div>
                                <div>
                                    <p className='text-lg'>{`${format(dates[0]?.startDate, 'iiii')}`} Check in</p>
                                    <p className='text-lg'>After 12:00 pm</p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-5'>
                                <div className='bg-primary text-center text-white px-2 py-1'>
                                    <p className='text-sm leading-none uppercase'>{`${format(dates[0]?.endDate, 'MMM')}`}</p>
                                    <p>{`${format(dates[0]?.endDate, 'd')}`}</p>
                                </div>
                                <div>
                                    <p className='text-lg'>{`${format(dates[0]?.endDate, 'iiii')}`} Check Out</p>
                                    <p className='text-lg'>11:00 pm</p>
                                </div>
                            </div>
                        </div>
                        <span className='text-lg'>Self Check in with building staff</span>
                        <hr className='mt-5 border-1 border-primary' />
                        <div className=''>
                            <h2 className='my-4 text-lg font-semibold'>Things to keep in mind</h2>
                            <div className='space-y-5 text-lg'>
                                <p className='flex items-center'><MdOutlineChildFriendly className='text-gray-500 text-2xl mr-2' />Suitable for children and infants</p>
                                <p className='flex items-center'><MdPets className='text-gray-500 text-2xl mr-2' />pets not allowed</p>
                                <p className='flex items-center'><MdNoDrinks className='text-red-300 text-2xl mr-2' />Alcohol not allowed</p>
                                <p className='flex items-center'><GiPartyFlags className='text-gray-500 text-2xl mr-2' />No parties and events without permission</p>
                                <p className='flex items-center'><IoLogoNoSmoking className='text-red-300 text-2xl mr-2' />Smoking not allowed</p>
                                <p className='flex items-center'><ImManWoman className='text-gray-500 text-2xl mr-2' />Can't stay in hotel any guests without counted</p>
                            </div>
                        </div>
                        <button onClick={() => handleClick(_id)} style={{ letterSpacing: '2px' }} className='py-4 mt-10 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 uppercase'>Agree & continue</button>
                    </div>

                    <div className='w-11/12'>
                        <div className='shadow-lg p-8'>
                            <Pricing
                                id={_id}
                                title={title}
                                price={price}
                                shift={shift}
                                roomNumbers={roomNumbers}
                                photo={photos}
                                selectedRoom={selectedRoom}
                                loading={loading}
                                reFetch={reFetch}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ReviewRules;