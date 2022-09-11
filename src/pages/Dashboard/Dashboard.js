import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsCreditCard, BsPerson } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { MdDashboard, MdDeliveryDining, MdOutlineNotificationsNone, MdOutlineProductionQuantityLimits, MdSettingsSystemDaydream } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import NavbarDashboard from './NavbarDashboard';
import { FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
    return (
        <>
            <NavbarDashboard />
            <div className=" bg-black grid grid-cols-6 container mx-auto">

                <div className="bg-white">
                    <div className=''>
                        <Link to='/' className="normal-case"><span className='lg:text-xl text-xl block text-primary font-medium lg:h-8'>THE SULTAN</span><p style={{ letterSpacing: '3px', fontSize: '10px' }} className='text-black'>LUXURY HOTEL</p></Link>
                    </div>
                    <div className="">
                        <h2 className="text-xs tracking-wider font-semibold mt-8 mb-1">MAIN</h2>
                        <Link to='/' className='flex items-center space-x-1 mb-6'>
                            <MdDashboard className="text-green-500" />
                            <span>Dashboard</span>
                        </Link>
                        <h2 className="text-xs tracking-wider font-semibold mb-1">LISTS</h2>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <BsPerson className="" />
                            <span>Users</span>
                        </Link>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <MdOutlineProductionQuantityLimits className="" />
                            <span>Products</span>
                        </Link>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <BsCreditCard className="" />
                            <span>Orders</span>
                        </Link>
                        <Link to='/' className='flex items-center space-x-1 mb-6'>
                            <MdDeliveryDining className="" />
                            <span>Delivery</span>
                        </Link>
                        <h2 className="text-xs tracking-wider font-semibold mt-8 mb-1">USEFUL</h2>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <ImStatsBars className="" />
                            <span>Stats</span>
                        </Link>
                        <Link to='/' className='flex items-center space-x-1 mb-6'>
                            <MdOutlineNotificationsNone className="" />
                            <span>Notifications</span>
                        </Link>
                        <h2 className="text-xs tracking-wider font-semibold mt-8 mb-1">SERVICE</h2>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <MdSettingsSystemDaydream className="" />
                            <span>System Health</span>
                        </Link>
                        <Link to='/' className='flex items-center space-x-1 mb-6'>
                            <AiOutlineSetting className="" />
                            <span>Settings</span>
                        </Link>
                        <p className="text-xs tracking-wider font-semibold mt-8 mb-1">USER</p>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <CgProfile className="" />
                            <span>Profile</span>
                        </Link>
                        <Link to='/' className='flex items-center space-x-1 mb-2'>
                            <FiLogOut className="" />
                            <span>Logout</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className=" col-span-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;