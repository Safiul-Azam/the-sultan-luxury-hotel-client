import React from 'react';
import CustomLink from './CustomLink';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem()
    }
    const menu = <>
        <li><CustomLink to='/'>HOME</CustomLink></li>
        <li><CustomLink to='/about'>ABOUT</CustomLink></li>
        <li><CustomLink to='/room'>ROOM & SUITES</CustomLink></li>
        <li><CustomLink to='/restaurant'>RESTAURANT</CustomLink></li>
        <li><CustomLink to='/spa'>SPA</CustomLink></li>
        <li><CustomLink to='/contact-us'>CONTACT</CustomLink></li>
        {user ?
            <li><CustomLink to='/login'><button onClick={logOut}>SIGN OUT</button></CustomLink></li> :
            <li><CustomLink to='/login'>LOGIN</CustomLink></li>}
    </>

    return (
        <div className='lg:w-[1200px] mx-auto z-10 absolute top-3 left-16'>
            <div className="navbar">
                <div className="space-x-32 lg:space-x-0 lg:navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box">
                            {menu}
                        </ul>
                    </div>
                    <div className=''>
                        <Link to='/' className="normal-case text-center"><span className='lg:text-3xl text-xl block text-primary font-medium lg:h-8'>THE SULTAN</span><p style={{ letterSpacing: '8px', fontSize: '10px' }} className='text-white'>LUXURY HOTEL</p></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-lg tracking-widest ">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;