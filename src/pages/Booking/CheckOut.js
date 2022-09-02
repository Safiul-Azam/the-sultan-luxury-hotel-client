import { format } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import {AiOutlineCalendar} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const CheckOut = () => {
    const [openDate, setOpenDate] = useState(false)
    const [option, setOption]= useState([])
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const handleChange = e=>{
       setOption(prev => ({...prev , [e.target.id]: e.target.value}))
    }   
    console.log(option);
    return (
        <div className='bg-[#F8F5F0]'>
            <div className='w-[1150px] mx-auto my-28 py-24'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>CHECK NOW</p>
                <h2 className='text-5xl mb-7 text-black'>Search Rooms</h2>
                <div className='grid grid-cols-5 gap-2 relative'>
                        <button onClick={() => setOpenDate(!openDate)} className='py-4 px-8 text-lg bg-white tracking-widest flex justify-between items-center' >{`${format(date[0].startDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl'/></button>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='absolute top-12 left-0 z-40'
                        />}
                    <button onClick={() => setOpenDate(!openDate)} className='py-4 px-8 text-lg bg-white tracking-widest flex justify-between items-center'>{`${format(date[0].endDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl'/> </button>
                    <select className='py-4 px-8 border-separate-4' name="" id="">
                        <option className='text-lg' id="children1" value="children1">Children1</option>
                        <option className='text-lg' id="children2" value="children2">Children2</option>
                        <option className='text-lg' id="children3" value="children3">Children3</option>
                        <option className='text-lg' id="children4" value="children4">Children4</option>
                        <option className='text-lg' id="children5" value="children5">Children5</option>
                    </select>
                    <select onChange={handleChange} className='py-4 px-8' name="" id="">
                        <option id="room1" value="room1">Room1</option>
                        <option id="room2" value="room2">Room2</option>
                        <option id="room3" value="room3">Room3</option>
                        <option id="room4" value="room4">Room4</option>
                        <option id="room5" value="room5">Room5</option>
                    </select>
                    <Link to='/findRoom' style={{ letterSpacing: '2px' }} className='py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300'>CHECK NOW</Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;