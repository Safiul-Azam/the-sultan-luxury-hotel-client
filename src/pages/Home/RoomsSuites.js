import React, { useEffect, useState } from 'react';
import HomeSuite from './RoomSuitethree';
import HomeSuiteTwo from './RoomSuiteTwo';

const HomesSuites = () => {
    const [romes, setRomes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/roomsSuites')
            .then(res => res.json())
            .then(data => setRomes(data))
    }, [])
    return (
        <div className='py-24 bg-neutral'>
            <div className='w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>THE SULTAN LUXURY HOTEL</p>
                <h2 className='text-5xl mb-7 text-black'>Rooms & Suites</h2>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        romes.slice(0, 3).map(rome => <HomeSuite
                            key={rome.id}
                            rome={rome}
                        ></HomeSuite>)
                    }

                </div>
                <div className='grid grid-cols-2 gap-8 mt-8 w-full'>
                    {
                        romes.slice(3, 5).map(rome => <HomeSuiteTwo
                        key={rome.id}
                        rome={rome}
                        ></HomeSuiteTwo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomesSuites;