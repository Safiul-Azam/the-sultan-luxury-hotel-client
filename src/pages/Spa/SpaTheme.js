import React from 'react';
import theme2 from '../../images/photo/theme/2.jpg'
import theme3 from '../../images/photo/theme/3.jpg'
import theme4 from '../../images/photo/theme/4.jpg'
import { GiClockwork } from "react-icons/gi";

const SpaTheme = () => {
    return (
        <div>
            <div className=' lg:w-[1150px] mx-auto bg-[#F8F5F0] my-24'>
                <div className='grid grid-cols-2 items-center'>
                    <div className='overflow-hidden'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme2} alt="" />
                    </div>
                    <div className='p-10 text-[#666]'>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>EXPERIENCES</p>
                        <h2 className='text-4xl mb-7 text-black'>Spa Center</h2>
                        <p className='text-lg mb-4'>Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <div className='text-lg flex items-center space-x-2'>
                            <GiClockwork />
                            <p>Daily: 7.00 am to 9.00 pm</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <div className='p-10 text-[#666]'>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>MODERN</p>
                        <h2 className='text-4xl mb-7 text-black'>Fitness Center</h2>
                        <p className='text-lg mb-4'>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <div className='text-lg flex items-center space-x-2'>
                            <GiClockwork />
                            <p>Daily: 6.00 am to 6.00 pm</p>
                        </div>
                    </div>
                    <div className=' overflow-hidden'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme3} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center'>
                    <div className=' overflow-hidden'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme4} alt="" />
                    </div>
                    <div className='p-10 text-[#666]'>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>EXPERIENCES</p>
                        <h2 className='text-4xl mb-7 text-black'>The Health Club & Pool</h2>
                        <p className='text-lg mb-4'>The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <div className='text-lg flex items-center space-x-2'>
                            <GiClockwork />
                            <p>Daily: 10.00 am to 7.00 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpaTheme;