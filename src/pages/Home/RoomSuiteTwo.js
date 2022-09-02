import React from 'react';
import { BiBed, BiRightArrowAlt } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { GiTowel } from 'react-icons/gi';
import { MdDinnerDining } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const RoomSuiteTwo = () => {
    const { data, loading, error } = useFetch('http://localhost:5000/api/rooms')
    return (
        <div className='grid grid-cols-2 gap-8 mt-8 w-full'>
            {
                data?.slice(5, 7)?.map(room => <div
                    key={room._id}
                    room={room}
                    className='relative group'
                >
                    <div className='overflow-hidden'>
                        <img className='group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500' src={room?.photos[1]} alt="" />
                    </div>
                    <div className="text-white absolute -bottom-10 left-4 group-hover:bottom-10 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500 overflow-hidden">
                        <p className=" text-xl tracking-widest uppercase">{room?.price}$ / {room?.shift}</p>
                        <h2 className='text-2xl font-semibold tracking-wider'>{room?.title}</h2>
                        <hr className='w-20 group-hover:w-96 mt-3 group-hover:delay-100 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500' />
                        <div className="inline-flex justify-between w-96 items-center mt-5">
                            <div className='flex text-xl items-center gap-3'>
                                <BiBed />
                                <FaBath />
                                <MdDinnerDining />
                                <GiTowel />
                            </div>
                            <Link to={`/rooms/${room?._id}`} className="text-right flex items-center text-sm uppercase tracking-widest font-semibold">Details<BiRightArrowAlt className='mt-1' /></Link>
                        </div>
                    </div>
                </div>)}
        </div>

    );
};

export default RoomSuiteTwo;