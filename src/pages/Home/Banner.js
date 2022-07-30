import React from 'react';

import slider1 from '../../images/banner/1.jpg'
import Navbar from '../Shared/Navbar';
// import slider2 from '../../images/banner/2.jpg'
// import slider3 from '../../images/banner/3.jpg'
const Banner = () => {
  return (
    <div className=' h-screen' style={
      {
        background: `url(${slider1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }>
      <Navbar></Navbar>
    </div>
  );
};

export default Banner;