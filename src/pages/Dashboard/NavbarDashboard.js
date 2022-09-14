import React from 'react';
import DashCustomLink from './DashCustomLink';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaBell, FaEdit } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi';

const NavbarDashboard = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem()
    }

    return (
        <div className='mx-auto z-10 mb-10 mt-2 border-b-4'>
            <div className="flex justify-around  items-center pb-2">
                <DashCustomLink to='/'>HOME</DashCustomLink>
                    <input type="text" placeholder="Search" className="input w-1/2" />
                <ul className='flex space-x-8 items-center'>
                    <li className="indicator">
                        <FaBell className='text-xl' />
                        <span className="badge badge-sm bg-red-500 text-white indicator-item">8</span>
                    </li>
                    <li className="indicator">
                        <BiMessageDots className='text-xl' />
                        <span className="badge badge-sm bg-red-500 text-white indicator-item">3</span>
                    </li>
                </ul>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.img} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;