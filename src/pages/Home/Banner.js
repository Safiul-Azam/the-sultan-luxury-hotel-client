import React from 'react';

import slider1 from '../../images/banner/1.jpg'
import Navbar from '../Shared/Navbar';
import { GrStar } from "react-icons/gr";

const Banner = () => {
  return (
    <div className='h-screen pt-8 mix-blend-multiply bg-black-400' style={
      {
        background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${slider1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }>
      <Navbar></Navbar>
      <div className='text-white text-center mt-12'>
        <div className='flex justify-center text-xl mb-6 text-secondary'>
          <GrStar />
          <GrStar />
          <GrStar />
          <GrStar />
          <GrStar />
        </div>
        <p style={{letterSpacing:'6px'}} className='text-lg uppercase mb-6'>The Ultimate Luxury Experience</p>
        <h2 style={{letterSpacing:'12px', lineHeight:'70px'}} className='text-6xl uppercase w-3/4 mx-auto mb-7'>Enjoy The Best Moments of Life</h2>
        <button class=" bg-transparent tracking-widest border px-5 py-3 uppercase">Rooms & Suites</button>
      </div>
    </div>
  );
};

export default Banner;