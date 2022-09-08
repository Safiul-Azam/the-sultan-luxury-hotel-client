import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { GrStar } from 'react-icons/gr';
import { SearchContext } from '../../context/SearchContext';
import Spinner from '../Shared/Spinner';
import ReviewRules from './ReviewRules';

const Pricing = ({ price, shift, photo, title, loading, selectedRoom}) => {
    const { dates, options } = useContext(SearchContext)
    // dates count system
    const MILLISECOND_PER_DAY = 1000 * 24 * 60 * 60
    const dayDifference = (date1, date2) => {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime())
        const dayDiff = Math.ceil(timeDiff / MILLISECOND_PER_DAY)
        return dayDiff
    }
    const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate)
    // some price system updated
    const roomsPrice = price * days 
    const totalPrice = roomsPrice * selectedRoom?.length
    const forChildren = 10 * options?.children
    if (loading) {
        return <Spinner></Spinner>
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
                <img className='w-1/4' src={photo} alt="photos" />
            </div>
            <div className="w-3/4 my-2">
                <h2 className="label-text text-lg my-3 text-primary">Selected date for reserve</h2>
                <h2 className="w-full rounded-none text-lg flex items-center justify-between my-2">{`${format(dates[0]?.startDate, 'MM-dd-yyyy')}`}<BsArrowRight className='text-2xl' />  {`${format(dates[0]?.endDate, 'MM-dd-yyyy')}`}</h2>
                <hr />
            </div>
            <div className="w-full">
                <div className="w-full rounded-none text-xl flex items-center space-x-5">
                    {selectedRoom?.map((roomNumber,index) => (
                        <div key={index} className='py-3'>
                            {roomNumber && <label className='font-bold'>{index + 1} Room is Chose</label>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-xl w-3/4 space-y-2">
                <p>Adult : {options?.adult}</p>
                <hr />
                <p>Children : {options?.children}</p>
                <hr />
            </div>
            <div className='border p-3 w-full mt-3 space-y-2 text-lg'>
                <p className='text-lg font-bold text-gray-600'>Thank You for Reserved {days} Night to stay</p>
                {!selectedRoom?.length && <p className='text-primary text-lg'>You haven't selected any room yet!  Please select</p>}
                <div className='flex justify-between'>
                    <p className='flex justify-between'>${`${price} X ${days} (nights)`}</p>
                    <p>{roomsPrice} X {selectedRoom?.length} {selectedRoom?.length <= 1 ? '(room)': '(rooms)'} = ${totalPrice}</p>
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
        </div>
    );
};

export default Pricing;