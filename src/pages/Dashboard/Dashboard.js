import React, { useContext } from 'react';
import { AiOutlineAppstoreAdd, AiOutlineSetting } from 'react-icons/ai';
import { BsCreditCard, BsPerson } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { MdDashboard, MdOutlineNotificationsNone, MdOutlineProductionQuantityLimits, MdSettingsSystemDaydream } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import NavbarDashboard from './NavbarDashboard';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';
import DashCustomLink from './DashCustomLink';

const Dashboard = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem()
    }
    return (
        <>
            <div className="bg-[#F3F2F7] grid grid-cols-6">
                <div className="bg-white pl-8 py-6">
                    <div className=''>
                        <Link to='/'><h4 className='lg:text-2xl text-xl block text-primary font-medium lg:h-8'>THE SULTAN</h4><h4 style={{ letterSpacing: '3px' }} className='text-xs'>LUXURY HOTEL</h4></Link>
                    </div>
                    <div className="">
                        <h4 className="text-xs tracking-wider mt-8 mb-1 font-bold">MAIN</h4>
                        <DashCustomLink to='/dashboard' className='flex items-center space-x-1 mb-6'>
                            <MdDashboard className="text-green-500" />
                            <h4>Dashboard</h4>
                        </DashCustomLink>
                        <h4 className="text-xs tracking-wider font-bold mb-1">LISTS</h4>
                        <DashCustomLink to='/dashboard/users' className='flex items-center space-x-1 mb-2'>
                            <BsPerson className="" />
                            <h4>Users</h4>
                        </DashCustomLink>
                        <DashCustomLink to='/dashboard/addRoom' className='flex items-center space-x-1 mb-2'>
                            <AiOutlineAppstoreAdd className="" />
                            <h4>Add Room</h4>
                        </DashCustomLink>
                        <DashCustomLink to='/dashboard/allRooms' className='flex items-center space-x-1 mb-2'>
                            <MdOutlineProductionQuantityLimits className="" />
                            <h4>All Rooms</h4>
                        </DashCustomLink>
                        <DashCustomLink to='/dashboard/bookedRooms' className='flex items-center space-x-1 mb-2'>
                            <BsCreditCard className="" />
                            <h4>Booked Rooms</h4>
                        </DashCustomLink>
                        <h4 className="text-xs tracking-wider font-bold mt-8 mb-1">USEFUL</h4>
                        <DashCustomLink to='/' className='flex items-center space-x-1 mb-2'>
                            <ImStatsBars className="" />
                            <h4>Stats</h4>
                        </DashCustomLink>
                        <DashCustomLink to='/' className='flex items-center space-x-1 mb-6'>
                            <MdOutlineNotificationsNone className="" />
                            <h4>Notifications</h4>
                        </DashCustomLink>
                        <h4 className="text-xs tracking-wider font-bold mt-8 mb-1">SERVICE</h4>
                        <DashCustomLink to='/' className='flex items-center space-x-1 mb-2'>
                            <MdSettingsSystemDaydream className="" />
                            <h4>System Health</h4>
                        </DashCustomLink>
                        <DashCustomLink to='/' className='flex items-center space-x-1 mb-6'>
                            <AiOutlineSetting className="" />
                            <h4>Settings</h4>
                        </DashCustomLink>
                        <h4 className="text-xs tracking-wider font-bold mt-8 mb-1">USER</h4>
                        <DashCustomLink to='/dashboard/editProfile' className='flex items-center space-x-1 mb-2'>
                            <CgProfile className="" />
                            <h4>Profile</h4>
                        </DashCustomLink>
                        <DashCustomLink to='/' className='flex items-center space-x-1 mb-2'>
                            <FiLogOut className="" />
                            {user &&
                                <DashCustomLink to='/login'><h4 onClick={logOut}>Log Out</h4></DashCustomLink>}
                        </DashCustomLink>
                    </div>
                </div>
                <div className="col-span-5 mx-10">
                    <NavbarDashboard />
                    <Outlet />
                </div>
            </div>
        </>

    );
};

export default Dashboard;