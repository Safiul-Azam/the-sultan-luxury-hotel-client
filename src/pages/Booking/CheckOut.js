import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { AiOutlineCalendar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {
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
        <div className='bg-[#F8F5F0]'>
            <div className='container mx-auto lg:py-12 py-12 px-4'>
                <p style={{ letterSpacing: '5px' }} className='lg:text-lg text-sm uppercase mb-4 tracking-[3px] lg:tracking-[5px]'>CHECK NOW</p>
                <h2 className='lg:text-5xl text-3xl mb-7'>Search Rooms</h2>
                <div className='grid lg:grid-cols-6 grid-cols-1 gap-2 relative'>
                    <button onClick={() => setOpenDate(!openDate)} className='py-3 px-8 text-lg bg-white tracking-widest flex justify-between items-center' >{`${format(dates[0].startDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /></button>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className='absolute top-12 left-0 z-40'
                    />}
                    <button onClick={() => setOpenDate(!openDate)} className='py-4 px-8 text-lg bg-white tracking-widest flex justify-between items-center'>{`${format(dates[0].endDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /> </button>
                    <select onChange={handleChange} className='py-4 px-8 text-center' id="adult">
                        <option className='text-lg'>Adult</option>
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
    );
};

export default CheckOut;