import React from 'react';
import { BiBed, BiRightArrowAlt } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { GiTowel } from 'react-icons/gi';
import { MdDinnerDining } from 'react-icons/md';

const HomeSuiteTwo = ({ rome }) => {
    const { roomName, perDay, shift, img } = rome
    return (
        <div class="relative group">
            <div className='overflow-hidden'>
                <img className='group-hover:scale-110 group-hover:duration-500 group-hover:ease-in-out ease-in-out duration-500' src={img} alt="" />
            </div>
            <div class="text-white absolute -bottom-10 left-4 group-hover:bottom-10 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500 overflow-hidden">
                <p class=" text-xl tracking-widest uppercase">{perDay}$ / {shift}</p>
                <h2 className='text-2xl font-semibold tracking-wider'>{roomName}</h2>
                <hr className='w-20 group-hover:w-96 mt-3 group-hover:delay-100 group-hover:duration-500 group-hover:ease-out ease-in-out duration-500' />
                <div class="inline-flex justify-between w-96 items-center mt-5">
                    <div className='flex text-xl items-center gap-3'>
                        <BiBed />
                        <FaBath />
                        <MdDinnerDining />
                        <GiTowel />
                    </div>
                    <button class="text-right flex items-center text-lg uppercase tracking-widest font-semibold">Details <BiRightArrowAlt className='mt-1'></BiRightArrowAlt></button>
                </div>
            </div>
        </div>
    );
};

export default HomeSuiteTwo;