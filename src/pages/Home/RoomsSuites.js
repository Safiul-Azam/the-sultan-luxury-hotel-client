import React from 'react';
import RoomSuiteThree from './RoomSuiteThree';
import RoomSuiteTwo from './RoomSuiteTwo';

const RoomsSuites = () => {
    
    return (
        <div id='room&suites' className='py-24 bg-neutral'>
            <div className='container mx-auto px-4'>
                <p className='lg:text-lg text-sm uppercase mb-4 tracking-[3px] lg:tracking-[5px]'>THE SULTAN LUXURY HOTEL</p>
                <h2 className='lg:text-5xl text-3xl mb-7'>Rooms & Suites</h2>
                    <RoomSuiteThree/>
                    <RoomSuiteTwo/>
            </div>
        </div>
    );
};

export default RoomsSuites;