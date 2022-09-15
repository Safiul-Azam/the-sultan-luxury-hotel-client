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
        <div className='z-10 absolute w-full px-16 mt-8'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/'className="normal-case"><h2 className='lg:text-3xl text-xl block text-primary font-medium lg:h-8'>THE SULTAN</h2><h2 className='text-white text-xs text-center tracking-[5px]'>LUXURY HOTEL</h2></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 tracking-widest">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;