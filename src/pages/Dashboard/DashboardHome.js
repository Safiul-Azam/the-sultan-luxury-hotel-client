import React from 'react';
import Featured from './Featured';
import PieChart from './PieChart';

const DashboardHome = () => {
    return (
        <div>
            <div className='mb-7'>
                <p className='text-2xl font-semibold text-[#444]'>Dashboard</p>
            </div>
            <Featured />
            <PieChart/>
        </div>
    );
};

export default DashboardHome;