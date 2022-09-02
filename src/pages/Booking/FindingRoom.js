import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';
import { DateRange } from 'react-date-range';
import { FaMinus, FaPlus } from 'react-icons/fa';
import useFetch from '../../hooks/useFetch';

const FindingRoom = () => {
    const location = useLocation()
    const [date, setDate] = useState(location.state.date)
    const [option, setOption] = useState(location.state.option)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const handleChange = () => { }

    const {data, loading, error} = useFetch('http://localhost:5000/api/rooms')
    return (
        <div className='bg-neutral'>
            <div className='w-[1150px] mx-auto py-24'>
                <div className='border bg-[#222] w-1/3 pt-10'>
                    <div className='flex p-3 justify-evenly space-x-1 w-full'>
                        <button onClick={() => setOpenDate(!openDate)} className='w-1/2 px-4 py-4 text-lg bg-white flex justify-between items-center' >{`${format(date[0].startDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /></button>
                        <button onClick={() => setOpenDate(!openDate)} className=' w-1/2 px-4 py-4 text-lg bg-white flex justify-between items-center'>{`${format(date[0].endDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /> </button>
                    </div>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='relative w-full mb-8'
                    />}
                    <div onChange={handleChange}>
                        <div className="flex justify-evenly items-center mb-3">
                            <span className="label-text text-lg text-white">Min price <small>per night</small></span>
                            <input
                                onChange={e => setMin(e.target.value)} type="number"
                                className="input input-bordered w-1/2 rounded-none text-lg"
                            />
                        </div>
                        <div className="flex justify-evenly items-center">
                            <span className="label-text text-lg text-white">Max price <small>per night</small></span>
                            <input
                                onChange={e => setMax(e.target.value)} type="number"
                                className="input input-bordered w-1/2 rounded-none text-lg"
                            />
                        </div>
                        <div>
                            <div className=" flex justify-between px-12 space-x-6 items-center my-4">
                                <span className="text-white text-lg">Adult</span>
                                <div className="">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="btn-sm btn rounded-r-none"
                                        onClick={() => handleOption("adult", "d")}
                                    >
                                        <FaMinus></FaMinus>
                                    </button>
                                    <span className="text-lg text-white mx-5">
                                        {options.adult}
                                    </span>
                                    <button
                                        className="btn-sm btn rounded-l-none"
                                        onClick={() => handleOption("adult", "i")}
                                    >
                                        <FaPlus></FaPlus>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex justify-between px-12 items-center my-4">
                                <span className="text-white text-lg">Children</span>
                                <div className="">
                                    <button
                                        disabled={options.children <= 0}
                                        className="btn-sm btn rounded-r-none"
                                        onClick={() => handleOption("children", "d")}
                                    >
                                        <FaMinus></FaMinus>
                                    </button>
                                    <span className="text-lg text-white mx-5">
                                        {options.children}
                                    </span>
                                    <button
                                        className="btn-sm btn rounded-l-none"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        <FaPlus></FaPlus>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex justify-between px-12 items-center my-4">
                                <span className="text-white text-lg">Rooms</span>
                                <div className="">
                                    <button
                                        disabled={options.room <= 1}
                                        className="btn-sm btn rounded-r-none"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        <FaMinus></FaMinus>
                                    </button>
                                    <span className="text-lg text-white mx-5">
                                        {options.room}
                                    </span>
                                    <button
                                        className="btn-sm btn rounded-l-none"
                                        onClick={() => handleOption("room", "i")}
                                    >
                                        <FaPlus></FaPlus>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default FindingRoom;