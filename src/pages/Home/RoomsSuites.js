import React, { useEffect, useState } from 'react';
import RoomSuiteThree from './RoomSuiteThree';
import RoomSuiteTwo from './RoomSuiteTwo';

const RoomsSuites = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div id='room&suites' className='py-24 bg-neutral'>
            <div className='w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>THE SULTAN LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>Rooms & Suites</h2>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        rooms?.slice(0, 3)?.map(room => <RoomSuiteThree
                            key={room.id}
                            room={room}
                        ></RoomSuiteThree>)
                    }

                </div>
                <div className='grid grid-cols-2 gap-8 mt-8 w-full'>
                    {
                        rooms?.slice(3, 5)?.map(room => <RoomSuiteTwo
                        key={room.id}
                        room={room}
                        ></RoomSuiteTwo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RoomsSuites;