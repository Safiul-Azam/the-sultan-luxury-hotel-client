import React from 'react';
import CustomLink from '../Shared/CustomLink';
import { Link } from "react-router-dom";
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='bg-[#222222] py-20'>
            <div class="w-[1100px] mx-auto grid grid-cols-3 gap-24 ">
                <div>
                    <h2 class="text-white text-2xl">About Hotel</h2>
                    <p class="text-accent my-6 text-lg">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
                    <button class="px-8 text-accent text-left py-3 text-lg rounded-none bg-[#282828]">English</button>
                </div>
                <div className='text-accent'>
                    <h2 class="text-white text-2xl mb-5">Explore</h2>
                    <ul className='text-accent'>
                        <li><Link className='text-accent' to='/'></Link></li>
                        <li><Link className='text-accent' to='/about'>ABOUT</Link></li>
                        <li><Link className='text-accent' to='/room'>ROOM & SUITES</Link></li>
                        <li><Link className='text-accent' to='/restaurant'>RESTAURANT</Link></li>
                        <li><Link className='text-accent' to='/spa'>SPA</Link></li>
                        <li><Link className='text-accent' to='/gallery'>GALLERY</Link></li>
                        <li><Link className='text-accent' to='/news'>CONTACT</Link></li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h2 class="text-white text-2xl mb-5">Contact</h2>
                    <p class="link link-hover mb-4 text-lg">1616 Broadway NY, New York 10001 United States of America</p>
                    <div className='flex justify-start items-center mb-2'>
                        <FiPhoneCall className='text-2xl mr-8 text-white' />
                        <p className='block text-2xl text-white tracking-widest'>855 100 4444</p>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};

export default Footer;