import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';
import { DateRange } from 'react-date-range';
import { FaMinus, FaPlus } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';
import { GrStar } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import Spinner from '../Shared/Spinner';
import { SearchContext } from '../../context/SearchContext';
import Footer from '../Home/Footer';

const FindingRoom = () => {
    const location = useLocation()
    const [dates, setDates] = useState(location?.state?.dates)
    const [option, setOption] = useState(location?.state?.option)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [options, setOptions] = useState({
        adult: parseInt(option?.adult) || 1,
        children: parseInt(option?.children) || 0,
        room: parseInt(option?.room) || 1,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    const navigate = useNavigate()

    const { data, loading, error, reFetch } = useFetch(`https://sultan-hotel-1.onrender.com/api/rooms?min=${min || 0}&max=${max || 999}`)

    const { dispatch } = useContext(SearchContext)
    const handleClick = id => {
        dispatch({ type: 'NEW_SEARCH', payload: { dates, options } })
        navigate(`/findRoom/${id}`, { state: { dates, options } })

    }
    if (loading) {
        return <Spinner></Spinner>
    }
    const handleChange = () => {
        reFetch()
    }
    return (
        <>
            <div className='bg-neutral'>
                <div className='container mx-auto py-24 flex justify-between space-x-10'>
                    <div className='w-1/3'>
                        <div className='border w-full pt-10 '>
                            <div className='flex p-3 justify-evenly space-x-2 w-full'>
                                <button onClick={() => setOpenDate(!openDate)} className='w-1/2 px-4 py-4 text-lg bg-white flex justify-between items-center' >{`${format(dates[0]?.startDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /></button>
                                <button onClick={() => setOpenDate(!openDate)} className=' w-1/2 px-4 py-4 text-lg bg-white flex justify-between items-center'>{`${format(dates[0]?.endDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /> </button>
                            </div>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className='relative w-full mb-8'
                            />}
                            <div>
                                <div onChange={handleChange} className="flex justify-evenly items-center my-6">
                                    <span className="label-text text-lg ">Min price <small>per night</small></span>
                                    <input
                                        onChange={e => setMin(e.target.value)} type="number"
                                        className="input input-bordered w-1/2 rounded-none text-lg"
                                    />
                                </div>
                                <div onChange={handleChange} className="flex justify-evenly items-center">
                                    <span className="label-text text-lg ">Max price <small>per night</small></span>
                                    <input
                                        onChange={e => setMax(e.target.value)} type="number"
                                        className="input input-bordered w-1/2 rounded-none text-lg"
                                    />
                                </div>
                                <div>
                                    <div className=" flex justify-between px-12 space-x-6 items-center my-8">
                                        <span className=" text-lg">Adult</span>
                                        <div className="">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="btn-sm btn btn-accent rounded-r-none"
                                                onClick={() => handleOption("adult", "d")}
                                            >
                                                <FaMinus></FaMinus>
                                            </button>
                                            <span className="text-lg  mx-5">
                                                {options.adult}
                                            </span>
                                            <button
                                                className="btn-sm btn btn-accent rounded-l-none"
                                                onClick={() => handleOption("adult", "i")}
                                            >
                                                <FaPlus></FaPlus>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex justify-between px-12 items-center my-8">
                                        <span className=" text-lg">Children</span>
                                        <div className="">
                                            <button
                                                disabled={options.children <= 0}
                                                className="btn-sm btn btn-accent rounded-r-none"
                                                onClick={() => handleOption("children", "d")}
                                            >
                                                <FaMinus></FaMinus>
                                            </button>
                                            <span className="text-lg  mx-5">
                                                {options.children}
                                            </span>
                                            <button
                                                className="btn-sm btn btn-accent rounded-l-none"
                                                onClick={() => handleOption("children", "i")}
                                            >
                                                <FaPlus></FaPlus>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className=" flex justify-between px-12 items-center my-8">
                                        <span className=" text-lg">Rooms</span>
                                        <div className="">
                                            <button
                                                disabled={options.room <= 1}
                                                className="btn-sm btn btn-accent rounded-r-none"
                                                onClick={() => handleOption("room", "d")}
                                            >
                                                <FaMinus></FaMinus>
                                            </button>
                                            <span className="text-lg  mx-5">
                                                {options.room}
                                            </span>
                                            <button
                                                className="btn-sm btn btn-accent rounded-l-none"
                                                onClick={() => handleOption("room", "i")}
                                            >
                                                <FaPlus></FaPlus>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleChange} style={{ letterSpacing: '2px' }} className='w-full flex items-center justify-center py-3 text-xl text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 mt-10'><FiSearch className='text-lg mr-2' /> Search</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-3/4 grid grid-cols-3 gap-4'>
                        {
                            data?.map(room => <div
                                key={room._id}
                                room={room}
                                className=''
                            >
                                <div class="card rounded-none">
                                    <figure><img src={room.photos[0]} alt="Shoes" /></figure>
                                    <div class="py-3 border px-2">
                                        <small className='capitalize text-lg'>{room.title} / {room.shift}</small>
                                        <p className='text-primary font-medium text-lg'>${room.price} Per Day</p>
                                        <p className='text-lg'>{room.checkIn[0]}</p>
                                        <p className='pb-1 text-lg'>{room.checkOut[0]}</p>
                                        <div className='flex text-xs mb-4 text-secondary'>
                                            <GrStar />
                                            <GrStar />
                                            <GrStar />
                                            <GrStar />
                                            <GrStar />
                                        </div>
                                        <button onClick={() => handleClick(room._id)} className='border p-1 border-primary'>See Available</button>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default FindingRoom;