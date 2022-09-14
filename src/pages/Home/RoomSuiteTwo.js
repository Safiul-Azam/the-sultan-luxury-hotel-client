import React from 'react';
import { BiBed, BiRightArrowAlt } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { GiTowel } from 'react-icons/gi';
import { MdDinnerDining } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Spinner from '../Shared/Spinner';

const RoomSuiteTwo = () => {
    const { data, loading } = useFetch('https://sultan-hotel-1.onrender.com/api/rooms')
    if(loading){
        return <Spinner/>
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 w-full'>
             {
                data?.slice(5, 7)?.map(room => <div
                    key={room._id}
                    room={room}
                    className='relative group'
                >
                    <div className='overflow-hidden'>
                            <img className='group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500' src={room.photos[1]} alt="" />
                    </div>
                    <div className="text-white absolute -bottom-10 group-hover:bottom-10 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500">
                        <p className="text-xl tracking-widest uppercase pl-3">{room.price}$ / {room.shift}</p>
                        <h2 className='text-2xl font-semibold tracking-wider pl-3'>{room.title}</h2>
                        <hr className='w-20 mt-3 group-hover:w-full group-hover:delay-100 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500 ml-3' />
                        <div className="inline-flex justify-between w-80 items-center mt-5 pl-3">
                            <div className='flex text-xl items-center gap-3'>
                                <BiBed />
                                <FaBath />
                                <MdDinnerDining />
                                <GiTowel />
                            </div>
                            <Link to={`/rooms/${room._id}`} className="text-right flex items-center text-sm uppercase tracking-widest font-semibold">Details<BiRightArrowAlt className='mt-1' /></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default RoomSuiteTwo;