import React from 'react';
import useFetch from '../../hooks/useFetch';
import RoomSuiteThree from './RoomSuiteThree';
import RoomSuiteTwo from './RoomSuiteTwo';

const RoomsSuites = () => {
    const {data, loading, error} = useFetch('http://localhost:5000/api/rooms')
    return (
        <div id='room&suites' className='py-24 bg-neutral'>
            <div className='w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>THE SULTAN LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>Rooms & Suites</h2>
                <div className=''>
                    <RoomSuiteThree></RoomSuiteThree>

                </div>
                <div className='grid grid-cols-2 gap-8 mt-8 w-full'>
                    {
                        data?.slice(3, 5)?.map(room => <RoomSuiteTwo
                        key={room._id}
                        room={room}
                        ></RoomSuiteTwo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomsSuites;