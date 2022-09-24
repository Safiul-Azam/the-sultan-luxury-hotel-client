import React from 'react';
import Navbar from './Navbar';
import ScrollNavbar from './ScrollNavbar';

const Nofound = () => {
    return (
        <div className=''>
            <ScrollNavbar/>
            <h2 className='text-center text-4xl text-primary pt-40'>This Pages not Found!</h2>
        </div>
    );
};

export default Nofound;