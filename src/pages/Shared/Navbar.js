import React, { useEffect, useState } from 'react';
import CustomLink from './CustomLink';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import ScrollNavbar from './ScrollNavbar';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
    }
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 ) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
    }, [])
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
        <>
       {scroll?<ScrollNavbar/> : <div className="navbar bg-transparent fixed top-3 z-20">
            <div className="navbar-start w-11/12 lg:w-11/12 justify-between lg:justify-around flex-row lg:flex-row-reverse items-center">
                <div className="dropdown text-white mt-2">
                    <label tabIndex="0" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="space-y-2 text-xs dropdown-content p-4 shadow text-white bg-accent">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="normal-case"><span className='lg:text-3xl text-lg text-primary font-medium mb-2'>THE SULTAN</span><h4 className='text-white lg:tracking-[6px] lg:text-sm text-xs tracking-[4px]'>LUXURY HOTEL</h4></Link>
            </div>
            <div className="navbar-center hidden lg:flex z-10">
                <ul className="menu menu-horizontal text-white text-sm">
                    {menu}

                </ul>
            </div>
        </div>}
        </>
    );
};

export default Navbar;