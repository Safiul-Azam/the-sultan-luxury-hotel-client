import React from 'react';
import CustomLink from './CustomLink';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
    }
    const menu = <>
        <li><CustomLink to='/'>HOME</CustomLink></li>
        <li><CustomLink to='/about'>ABOUT</CustomLink></li>
        <li><CustomLink to='/room'>ROOM & SUITES</CustomLink></li>
        <li><CustomLink to='/restaurant'>RESTAURANT</CustomLink></li>
        <li><CustomLink to='/spa'>SPA</CustomLink></li>
        <li><CustomLink to='/contact-us'>CONTACT</CustomLink></li>
        {user ?
            <>
                <li><CustomLink to='/dashboard'>DASHBOARD</CustomLink></li>
                <li onClick={logOut}><CustomLink to='/login'>SIGN OUT</CustomLink></li>
            </> :
            <li><CustomLink to='/login'>LOGIN</CustomLink></li>}
    </>

    return (
        <div class="navbar bg-transparent fixed top-3 z-20">
            <div class="navbar-start w-full justify-around flex-row-reverse">
                <div class="dropdown text-white mt-2">
                    <label tabIndex="0" class="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="space-y-2 text-xs dropdown-content p-4 shadow text-white bg-accent">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="normal-case"><span className='lg:text-3xl text-xl block text-primary font-medium lg:h-8'>THE SULTAN</span><p className='text-white tracking-[6px] text-sm'>LUXURY HOTEL</p></Link>
            </div>
            <div class="navbar-center hidden lg:flex z-10">
                <ul class="menu menu-horizontal p-0 text-white gap-5">
                    {menu}
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;