import { format } from 'date-fns';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { GrStar } from 'react-icons/gr';

const Pricing = ({ date, price, shift, option, roomNumbers, photo, title }) => {
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
                <span className="label-text text-lg">Selected date for reserve</span>
                <span className="w-full rounded-none text-lg flex items-center justify-between">{`${format(date[0].startDate, 'MM-dd-yyyy')}`}<BsArrowRight className='text-2xl' />  {`${format(date[0].endDate, 'MM-dd-yyyy')}`}</span>
                <hr />
            </div>
            <div className="text-xl w-3/4 space-y-2">
                <p>{option?.adult}</p>
                <hr />
                <p>{option?.children}</p>
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
                            <input type="checkbox" value={roomNumber._id} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex space-x-10'>

            </div>
            <div className='border p-3 w-full mt-3 space-y-2 text-lg'>
                <p className='text-lg font-bold text-gray-600'>Thank You for Reserved 7 Night to stay</p>
                <div className='flex justify-between'>
                    <p className='flex justify-between'>${`${price} X 7`}</p>
                    <p>{'1050'}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Children 4</p>
                    <p>10 X 4 = $40</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Cleaning fee</p>
                    <p>$10</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Service fee</p>
                    <p>$25</p>
                </div>
                <hr />
                <div className='flex justify-between font-bold'>
                    <p>Total</p>
                    <p>{'1125'}</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;