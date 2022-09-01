import React from 'react';
import { BiBed, BiRightArrowAlt } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { GiTowel } from 'react-icons/gi';
import { MdDinnerDining } from 'react-icons/md';

const RoomSuiteTwo = ({ room }) => {
    const { roomName, perDay, shift, img } = room
    return (
        <div className="relative group">
            <div className='overflow-hidden'>
                <img className='group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500' src={img} alt="" />
            </div>
            <div className="text-white absolute -bottom-10 left-4 group-hover:bottom-10 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500 overflow-hidden">
                <p className=" text-xl tracking-widest uppercase">{perDay}$ / {shift}</p>
                <h2 className='text-2xl font-semibold tracking-wider'>{roomName}</h2>
                <hr className='w-20 group-hover:w-96 mt-3 group-hover:delay-100 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500' />
                <div className="inline-flex justify-between w-96 items-center mt-5">
                    <div className='flex text-xl items-center gap-3'>
                        <BiBed />
                        <FaBath />
                        <MdDinnerDining />
                        <GiTowel />
                    </div>
                    <button className="text-right flex items-center text-lg uppercase tracking-widest font-semibold">Details <BiRightArrowAlt className='mt-1'></BiRightArrowAlt></button>
                </div>
            </div>
        </div>
    );
};

export default RoomSuiteTwo;