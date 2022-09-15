import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from 'react';
import { useEffect } from 'react';


const ExtraServices = () => {
    const [exServices, setExServices] = useState([])
    useEffect(() => {
        fetch('eServices.json')
            .then(res => res.json())
            .then(data => setExServices(data))
    }, [])
    return (
        <div className='bg-[#222222] lg:py-24 py-12'>
            <div className='lg:w-6xl lg:mx-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10 '>
                    <div className='px-10 pb-5 lg:px-0 lg:pb-0'>
                        <p style={{ letterSpacing: '6px' }} className='lg:text-lg text-primary text-sm uppercase mb-4'>BEST PRICES</p>
                        <h2 className='lg:text-5xl text-3xl mb-7 text-white'>Extra Services</h2>
                        <p className='text-xl mb-4 text-accent'>The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
                        <p className='text-xl mb-6 text-accent'>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
                        <div className='flex justify-start items-center'>
                            <FiPhoneCall className='text-4xl mr-8 text-primary' />
                            {/* <p className='text-lg text-accent'>For information <p className='block text-2xl text-primary tracking-widest'>855 100 4444</p></p> */}
                        </div>
                    </div>
                    <div className='lg:col-span-2'>
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                            slidesPerGroup={2}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {exServices.map(exService => <SwiperSlide key={exService.id} className='-top-12'>
                                <div>
                                    <div className="bg-base-100 shadow-xl">
                                        <figure><img src={exService.img} alt="" /></figure>
                                        <div className="card-body">
                                            <h2 className="text-3xl">{exService.roomName}</h2>
                                            <h4 className='text-5xl text-primary'>${exService.perDay}<small className='text-sm text-[#777]'>/ {exService.shift}</small></h4>
                                            <div className='text-lg text-[#777]'>
                                                <p className='flex items-center gap-2 '><IoCheckmarkOutline className='text-primary text-xl' />{exService.firstDes}</p>
                                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='text-primary text-xl' />{exService.secondDes}</p>
                                                <p className='flex items-center gap-2'><AiOutlineClose className='text-xl text' />{exService.thirdDes}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>)}

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraServices;