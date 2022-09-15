import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import DashCustomLink from '../Dashboard/DashCustomLink';

const ScrollNavbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const logOut = () => {
        dispatch({ type: 'LOGOUT' })
    }

    const menu = <>
        <li><DashCustomLink to='/'>HOME</DashCustomLink></li>
        <li><DashCustomLink to='/about'>ABOUT</DashCustomLink></li>
        <li><DashCustomLink to='/room'>ROOM & SUITES</DashCustomLink></li>
        <li><DashCustomLink to='/restaurant'>RESTAURANT</DashCustomLink></li>
        <li><DashCustomLink to='/spa'>SPA</DashCustomLink></li>
        <li><DashCustomLink to='/contact-us'>CONTACT</DashCustomLink></li>
        {user ?
            <>
                <li><DashCustomLink to='/dashboard'>DASHBOARD</DashCustomLink></li>
                <li onClick={logOut}><DashCustomLink to='/login'>SIGN OUT</DashCustomLink></li>
            </> :
            <li><DashCustomLink to='/login'>LOGIN</DashCustomLink></li>}
    </>

    return (
        <div className="navbar bg-white fixed z-20 py-4 shadow-lg">
            <div className="navbar-start w-full justify-around flex-row-reverse">
                <div className="dropdown text-white mt-2">
                    <label tabIndex="0" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="space-y-2 text-xs dropdown-content p-4 shadow text-white bg-accent">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="normal-case"><span className='lg:text-4xl text-xl block text-primary font-medium lg:h-8 mb-2'>THE SULTAN</span><h4 className='text-black tracking-[10px] text-sm'>LUXURY HOTEL</h4></Link>
            </div>
            <div className="navbar-center hidden lg:flex z-10">
                <ul className="menu menu-horizontal p-0 text-white gap-5">
                    {menu}

                </ul>
            </div>
        </div>
    );
};

export default ScrollNavbar;