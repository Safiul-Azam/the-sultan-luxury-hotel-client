import React from 'react';
import DashCustomLink from './DashCustomLink';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaBell, FaEdit } from 'react-icons/fa';

const NavbarDashboard = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem()
    }

    return (
        <div className='lg:w-[1200px] mx-auto z-10 absolute left-16'>
            <div className="navbar">
                <div className="space-x-32 lg:space-x-0 lg:navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box">
                            <li><DashCustomLink to='/'>HOME</DashCustomLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-sm tracking-widest ">
                        <li><DashCustomLink to='/'>HOME</DashCustomLink></li>
                        <div className='flex space-x-5 items-center'>
                            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                            <div className="indicator">
                                <FaBell className='text-lg' />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary">99+</span>
                                <button className="btn">inbox</button>
                            </div>
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary">99+</span>
                                <button className="btn">inbox</button>
                            </div>
                            <div className="indicator">
                                <span className="indicator-item badge badge-secondary">99+</span>
                                <button className="btn">inbox</button>
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user.img} alt='' />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;