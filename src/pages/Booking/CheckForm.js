import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GrStar } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom'
import img from '../../images/banner/2.jpg'
import sponsor1 from '../../images/sponsor/3.png'
import sponsor2 from '../../images/sponsor/4.png'
import sponsor3 from '../../images/sponsor/5.png'

const CheckForm = () => {
    const [openDate, setOpenDate] = useState(false)
    const [option, setOption] = useState([])
    const navigate = useNavigate()
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const handleChange = e => {
        setOption(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleClick = () => {
        navigate('/findRoom', { state: { dates, option } })
    }
    return (
        <div id='CheckRoom' className='lg:pt-24 pt-12' style={
            {
                background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }
        }>
            <div className='lg:relative'>
                <div className='container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-32'>
                    <div className='lg:w-1/2 lg:p-10 p-6'>
                        <div className='flex text-secondary mb-1'>
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                            <GrStar />
                        </div>
                        <h3 className='text-white text-2xl my-8'>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h3>
                        <div className='flex justify-start items-center text-white'>
                            <FiPhoneCall className='text-4xl mr-8' />
                            <Link to='/' className='text-lg'>For information<p className='block text-2xl tracking-widest'>855 100 4444</p></Link>
                        </div>
                    </div>

                    <div className='bg-[#F8F5F0] lg:px-10 px-4 py-16 lg:relative -bottom-20 shadow-sm lg:w-1/2'>
                        <p style={{ letterSpacing: '5px' }} className='text-sm text-primary uppercase mb-3'>ROOMS & SUITES</p>
                        <h2 className='text-2xl text-black'>Hotel Booking Form</h2>
                        <hr className='my-5' />
                        <div className='grid grid-cols-1 gap-2 relative'>
                            <div className='flex space-x-2'>
                                <button onClick={() => setOpenDate(!openDate)} className='py-4 px-5 text-lg bg-white tracking-widest flex justify-between items-center w-full' >{`${format(dates[0].startDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /></button>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className='absolute top-16 left-0 z-40'
                                />}
                                <button onClick={() => setOpenDate(!openDate)} className='py-4 px-5 text-lg bg-white tracking-widest flex justify-between items-center w-full'>{`${format(dates[0].endDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /> </button>
                            </div>
                            <select onChange={handleChange} className='py-4 px-8 text-center' id="adult">
                                <option className='text-lg hover:bg-primary hover:text-4xl focus:bg-primary'>Adult</option>
                                <option className='text-lg'>1</option>
                                <option className='text-lg'>2</option>
                                <option className='text-lg'>3</option>
                                <option className='text-lg'>4</option>
                                <option className='text-lg'>5</option>
                            </select>
                            <select onChange={handleChange} className='py-4 px-8 text-center' name="" id="children">
                                <option className='text-lg'>Children</option>
                                <option className='text-lg'>1</option>
                                <option className='text-lg'>2</option>
                                <option className='text-lg'>3</option>
                                <option className='text-lg'>4</option>
                                <option className='text-lg'>5</option>
                            </select>
                            <select onChange={handleChange} className='py-4 px-8 text-center' name="" id="room">
                                <option className='text-lg'>Room</option>
                                <option className='text-lg'>1</option>
                                <option className='text-lg'>2</option>
                                <option className='text-lg'>3</option>
                                <option className='text-lg'>4</option>
                                <option className='text-lg'>5</option>
                            </select>
                            <button onClick={handleClick} style={{ letterSpacing: '2px' }} className='py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300'>CHECK NOW</button>
                        </div>
                    </div>
                </div>
                <div className='bg-white py-5 lg:px-0 px-10'>
                    <div className='container mx-auto grid grid-cols-6'>
                        <img src={sponsor1} alt="" />
                        <img src={sponsor2} alt="" />
                        <img src={sponsor3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckForm;