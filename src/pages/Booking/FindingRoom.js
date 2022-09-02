import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { AiOutlineCalendar } from 'react-icons/ai';
import { DateRange } from 'react-date-range';
import { FaMinus, FaPlus } from 'react-icons/fa';

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
    console.log(location);
    return (
        <div className='bg-neutral'>
            <div className='w-[1150px] mx-auto py-24'>
                <div className='border bg-[#222] w-1/3 pt-10'>
                    <div className='flex p-3 justify-evenly w-full'>
                        <button onClick={() => setOpenDate(!openDate)} className='py-4 px-10 text-lg bg-white flex justify-between items-center' >{`${format(date[0].startDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /></button>
                        <button onClick={() => setOpenDate(!openDate)} className='py-4 px-10 text-lg bg-white flex justify-between items-center'>{`${format(date[0].endDate, 'MM-dd-yyyy')}`}<AiOutlineCalendar className='text-primary text-xl' /> </button>
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
                                <div className=" flex justify-evenly">
                                    <span className="text-white text-lg">Adult</span>
                                    <div className="optionCounter">
                                        <button
                                            disabled={options.adult <= 1}
                                            className="btn-sm btn rounded-r-none"
                                            onClick={() => handleOption("adult", "d")}
                                        >
                                            <FaMinus></FaMinus>
                                        </button>
                                        <span className="optionCounterNumber">
                                            {options.adult}
                                        </span>
                                        <button
                                            className="btn-sm btn rounded-r-none"
                                            onClick={() => handleOption("adult", "i")}
                                        >
                                        <FaPlus></FaPlus>
                                        </button>
                                    </div>
                                </div>
                        </div>
                        <div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.children}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.room <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.room}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "i")}
                                    >
                                        +
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