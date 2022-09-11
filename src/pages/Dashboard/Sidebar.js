import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-3'>
                <Link to='/' className="normal-case"><span className='lg:text-xl text-xl block text-primary font-medium lg:h-8'>THE SULTAN</span><p style={{ letterSpacing: '5px', fontSize: '10px' }} className='text-black'>LUXURY HOTEL</p></Link>
            </div>
        </div>
    );
};

export default Sidebar;