import React from 'react';
import {Link} from 'react-router-dom'

const CopyRight = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <div className='text-white text-sm tracking-wide bg-[#1e1e1e] py-8 text-center'>
                <p className='text-xs text-accent'>&copy; Copyright {year} by <Link className='text-sm text-white hover:text-primary duration-300 hover:duration-300' to="/home">sultan@luxuryhotel.com</Link></p>
            </div>
        </div>
    );
};

export default CopyRight;