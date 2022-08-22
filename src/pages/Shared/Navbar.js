import React from 'react';
import CustomLink from './CustomLink';
import { Link } from "react-router-dom";

const Navbar = () => {
    const menu = <>
    <li><CustomLink to='/'>HOME</CustomLink></li>
    <li><CustomLink to='/about'>ABOUT</CustomLink></li>
    <li><CustomLink to='/room'>ROOM & SUITES</CustomLink></li>
    <li><CustomLink to='/restaurant'>RESTAURANT</CustomLink></li>
    <li><CustomLink to='/spa'>SPA</CustomLink></li>
    <li><CustomLink to='/contact-us'>CONTACT</CustomLink></li>
    </>
    
    return (
        <div className=' w-[1200px] mx-auto z-10 absolute top-4 left-16'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                           {menu}
                        </ul>
                    </div>
                    <Link to='/' class="normal-case text-center"><span className='text-3xl block text-primary font-medium h-8'>THE SULTAN</span><p style={{letterSpacing:'8px',fontSize:'10px'}} className='text-white'>LUXURY HOTEL</p></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-lg tracking-widest ">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;