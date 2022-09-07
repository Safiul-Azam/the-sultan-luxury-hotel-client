import axios from 'axios';
import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { GrStar } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Pricing = ({ price, shift, roomNumbers, photo, title, id }) => {
    const [selected, setSelected] = useState([])
    const navigate = useNavigate()
    const { dates, options } = useContext(SearchContext)
    const MILLISECOND_PER_DAY = 1000 * 24 * 60 * 60
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime())
        const dayDiff = Math.ceil(timeDiff / MILLISECOND_PER_DAY)
        return dayDiff
    }
    const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate)

    const totalPrice = price * days
    const forChildren = 10 * options?.children


    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())

        const dates = []

        while (date <= end) {
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate() + 1)
        }
        return dates
    }
    const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
          allDates.includes(new Date(date).getTime())
        );
    
        return !isFound;
      };

    const handleSelected = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelected(checked ? [...selected, value] : selected.filter(item => item !== value))
    }
    console.log(selected);
    const handleClick = async ()=>{
        try {
            await Promise.all(selected.map(roomId => {
                const res = axios.put(`http://localhost:5000/api/rooms/availability/${roomId}`, {dates:allDates})
                return res.data
            }))
        } catch (err) {}
    }

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-2xl text-gray-600 font-bold'>{title}</h2>
                    <p className='text-xl my-1 capitalize'>${price} / {shift}</p>
                    <div className='flex text-xs mb-4 items-center text-secondary'>
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <p className='text-sm ml-2 text-black'>(20 reviews)</p>
                    </div>
                </div>
                <img className='w-1/3' src={photo} alt="photos" />
            </div>
            <div className="w-3/4 my-4">
                <h2 className="label-text text-lg my-3 text-primary">Selected date for reserve</h2>
                <h2 className="w-full rounded-none text-lg flex items-center justify-between my-2">{`${format(dates[0]?.startDate, 'MM-dd-yyyy')}`}<BsArrowRight className='text-2xl' />  {`${format(dates[0]?.endDate, 'MM-dd-yyyy')}`}</h2>
                <hr />
            </div>
            <div className="text-xl w-3/4 space-y-2">
                <p>Adult : {options?.adult}</p>
                <hr />
                <p>Children : {options?.children}</p>
                <hr />
            </div>
            <div className=" w-full">
            </div>
            <div className="w-full mt-3">
                <span className="label-text text-lg">Choose Room Number</span>
                <div className="w-full rounded-none text-lg flex items-center space-x-5">
                    {roomNumbers?.map(roomNumber => (
                        <div key={roomNumber._id}>
                            <label>{roomNumber.number}</label>
                            <input type="checkbox" disabled={!isAvailable(roomNumber)} onChange={handleSelected} value={roomNumber._id} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex space-x-10'>

            </div>
            <div className='border p-3 w-full mt-3 space-y-2 text-lg'>
                <p className='text-lg font-bold text-gray-600'>Thank You for Reserved {days} Night to stay</p>
                <div className='flex justify-between'>
                    <p className='flex justify-between'>${`${price} X ${days}`}</p>
                    <p>${totalPrice}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Children {options?.children}</p>
                    <p>10 X {options?.children} = ${forChildren}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Cleaning fee</p>
                    <p>${10}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Service fee</p>
                    <p>${25}</p>
                </div>
                <hr />
                <div className='flex justify-between font-bold'>
                    <p>Total</p>
                    <p>${totalPrice + forChildren + 10 + 25}</p>
                </div>
            </div>
            <button onClick={() => handleClick(id)} style={{ letterSpacing: '2px' }} className='mt-10 w-full py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300 uppercase'>Book Now or Reserve</button>
        </div>
    );
};

export default Pricing;