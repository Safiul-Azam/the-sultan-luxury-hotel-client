import React from 'react';
import { Link } from "react-router-dom";
import { FiPhoneCall } from 'react-icons/fi';
import { BsGlobe } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { FiYoutube} from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='bg-[#222222] py-20'>
            <div className=" lg:w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24 ">
                <div>
                    <h2 className="text-white text-2xl">About Hotel</h2>
                    <p className="text-accent my-8 text-lg">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.</p>
                    <button className="px-6 flex  items-center text-accent text-left py-3 text-sm rounded-none bg-[#282828]">English <BsGlobe className='ml-8' /></button>
                </div>
                <div className='ml-20'>
                    <h2 className="text-white text-2xl mb-5 tracking-wider">Explore</h2>
                    <ul className='text-accent tracking-wider text-lg space-y-1'>
                        <li><Link to='/'></Link></li>
                        <li><Link to='/about'>Home</Link></li>
                        <li><Link to='/room'>Room & Suites</Link></li>
                        <li><Link to='/restaurant'>Restaurant</Link></li>
                        <li><Link to='/spa'>Spa & Wellness</Link></li>
                        <li><Link to='/gallery'>About hotel</Link></li>
                        <li><Link to='/news'>Contact</Link></li>
                    </ul>
                </div>
                <div className='text-white mr-16'>
                    <h2 className="text-white text-2xl mb-5">Contact</h2>
                    <p className="link link-hover mb-4 text-accent text-lg">1616 Broadway NY, New York 10001 United States of America</p>
                    <div className='flex justify-start items-center mb-4'>
                        <FiPhoneCall className='text-2xl mr-2 text-white' />
                        <h2 className='block text-2xl text-white tracking-widest'>855 100 4444</h2>

                    </div>
                    <div>
                        <p className='text-lg tracking-wider text-white'>sultan@luxuryhotel.com</p>
                        <hr className='border-primary border-top w-3/4 text-primary p-3' />
                        <div className=''>
                            <ul className="flex leading-none space-x-4 text-lg ">
                                <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' className=" mb-4">
                                    <FaInstagram className='hover:text-primary text-white hover:duration-500 duration-500' />
                                </a>
                                <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' className="mb-4">
                                    <FaTwitter className='hover:text-primary text-white hover:duration-500 duration-500' />
                                </a>
                                <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' className="mb-4">
                                    <FiYoutube className='hover:text-primary text-white hover:duration-500 duration-500' />
                                </a>
                                <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' className="mb-4">
                                    <FaFacebookF className='hover:text-primary text-white hover:duration-500 duration-500' />
                                </a>
                                <a href='https://www.linkedin.com/in/safiul-azam-b2a44a212/' className="mb-4">
                                    <FaPinterestP className='hover:text-primary text-white hover:duration-500 duration-500' />
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;