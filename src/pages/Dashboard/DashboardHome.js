import React from 'react';
import Featured from './Featured';
import PieChart from './PieChart';
import RevenueChart from './RevenueChart';
import Users from './Users';

const DashboardHome = () => {
    return (
        <div>
            <div className='mb-7'>
                <h4 className='text-2xl font-semibold text-[#444]'>Dashboard</h4>
            </div>
            <Featured />
            <PieChart/>
            <RevenueChart/>
            <Users/>
        </div>
    );
};

export default DashboardHome;