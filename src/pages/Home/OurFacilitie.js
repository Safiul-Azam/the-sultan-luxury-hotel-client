import React from 'react';

const OurService = ({service}) => {
    const {serviceName, description, img} = service
    return (
        <div className='border p-10'>
            <img className='mb-2' src={img} alt="" />
            <h2 className='text-xl mb-2'>{serviceName}</h2>
            <p className='text-lg tracking-normal text-accent'>{description}</p>
        </div>
    );
};

export default OurService;