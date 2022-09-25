import React from 'react';
import theme1 from '../../images/photo/theme/1.jpg'
import theme2 from '../../images/photo/theme/2.jpg'
import theme3 from '../../images/photo/theme/3.jpg'
import theme4 from '../../images/photo/theme/4.jpg'

const Services = () => {
    return (
        <>
            <div className='container mx-auto bg-[#F8F5F0] my-24 px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
                    <div className=' overflow-hidden order-1'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme1} alt="" />
                    </div>
                    <div className='lg:p-10 py-4 text-[#666] order-2 '>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4 text-[#666]'>DISCOVER</p>
                        <h2 className='text-4xl mb-7 text-black'>The Restaurant</h2>
                        <p className='text-lg mb-4'>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='py-3 px-8 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500'>LEARN MORE</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>

                    <div className='lg:p-10 py-4 text-[#666] lg:order-1 order-2'>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>EXPERIENCES</p>
                        <h2 className='text-4xl mb-7 text-black'>Spa Center</h2>
                        <p className='text-lg mb-4'>Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='py-3 px-8 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500'>LEARN MORE</button>
                    </div>
                    <div className='overflow-hidden lg:order-2 order-1'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme2} alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div className=' overflow-hidden'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme3} alt="" />
                    </div>
                    <div className='lg:p-10 py-4 text-[#666]'>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>MODERN</p>
                        <h2 className='text-4xl mb-7 text-black'>Fitness Center</h2>
                        <p className='text-lg mb-4'>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='py-3 px-8 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500'>LEARN MORE</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
                    <div className='lg:p-10 py-4 text-[#666] lg:order-1 order-2'>
                        <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>EXPERIENCES</p>
                        <h2 className='text-4xl mb-7 text-black'>The Health Club & Pool</h2>
                        <p className='text-lg mb-4'>The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <button className='py-3 px-8 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500'>LEARN MORE</button>
                    </div>
                    <div className='overflow-hidden lg:order-2 order-1'>
                        <img className=' hover:scale-110 hover:duration-1000 hover:ease-in-out ease-in-out duration-1000' src={theme4} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;