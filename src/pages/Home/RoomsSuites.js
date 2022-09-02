import React from 'react';
import RoomSuiteThree from './RoomSuiteThree';
import RoomSuiteTwo from './RoomSuiteTwo';

const RoomsSuites = () => {
    
    return (
        <div id='room&suites' className='py-24 bg-neutral'>
            <div className='w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>THE SULTAN LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>Rooms & Suites</h2>
                    <RoomSuiteThree/>
                    <RoomSuiteTwo/>
            </div>
        </div>
    );
};

export default RoomsSuites;