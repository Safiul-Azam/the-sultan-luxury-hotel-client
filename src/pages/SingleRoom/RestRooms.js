import React, { useEffect, useState } from 'react';
import RoomSuiteThree from '../Home/RoomSuiteThree';

const RestRooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/roomsSuites')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    console.log(rooms);
    return (
        <div id='room&suites' className='py-24 bg-neutral'>
            <div className='w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>THE SULTAN LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>Rooms & Suites</h2>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        rooms?.map(room => <RoomSuiteThree
                            key={room.id}
                            room={room}
                        ></RoomSuiteThree>)
                    }

                </div>
            </div>
        </div>
    );
};

export default RestRooms;