import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { GiTowel } from "react-icons/gi";
import { Link } from 'react-router-dom';

const RoomSuiteThree = ({ room }) => {
    console.log(room);
    const { roomName, perDay, shift, img, _id } = room
    return (
        <div class="relative group">
            <div className='overflow-hidden'>
                <img className='group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500' src={img} alt="" />
            </div>
            <div class="text-white absolute -bottom-10 left-4 group-hover:bottom-10 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500">
                <p class=" text-xl tracking-widest uppercase">{perDay}$ / {shift}</p>
                <h2 className='text-2xl font-semibold tracking-wider'>{roomName}</h2>
                <hr className='w-20 mt-3 group-hover:w-full group-hover:delay-100 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500'/>
                <div class="inline-flex justify-between w-80 items-center mt-5">
                    <div className='flex text-xl items-center gap-3'>
                        <BiBed />
                        <FaBath />
                        <MdDinnerDining />
                        <GiTowel />
                    </div>
                    <Link to={`/room&suites/${_id}`} class="text-right flex items-center text-sm uppercase tracking-widest font-semibold">Details<BiRightArrowAlt className='mt-1'/></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomSuiteThree;