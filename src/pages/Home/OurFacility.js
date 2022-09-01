import React from 'react';

const OurFacility = ({service}) => {
    const {title, description, photo} = service
    return (
        <div className='border p-10'>
            <img className='mb-2' src={photo} alt="" />
            <h2 className='text-xl mb-2'>{title}</h2>
            <p className='text-lg tracking-normal text-[#777]'>{description}</p>
        </div>
    );
};

export default OurFacility;