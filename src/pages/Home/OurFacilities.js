import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Spinner from '../Shared/Spinner';
import OurFacility from './OurFacility';

const OurFacilities = () => {
    const {data, loading, error} = useFetch('http://localhost:5000/api/facilities')
    if(loading){
        <Spinner></Spinner>
    }
    return (
        <div className='w-[1150px] mx-auto my-28'>
            <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>OUR SERVICES</p>
            <h2 className='text-5xl mb-7 text-black'>Hotel Facilities</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                    data.map(service => <OurFacility
                    key={service._id}
                    service={service}
                    ></OurFacility>)
                }
            </div>
        </div>
    );
};

export default OurFacilities;