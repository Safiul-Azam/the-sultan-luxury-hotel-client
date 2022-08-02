import React, { useEffect, useState } from 'react';
import OurService from './OurFacilitie';

const OurFacilities = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='w-[1150px] mx-auto my-28'>
            <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>OUR SERVICES</p>
            <h2 className='text-5xl mb-7 text-black'>Hotel Facilities</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                    services.map(service => <OurService
                    key={service.id}
                    service={service}
                    ></OurService>)
                }
            </div>
        </div>
    );
};

export default OurFacilities;