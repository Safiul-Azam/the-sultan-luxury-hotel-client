import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ExtraService = ({ eService }) => {
    const { roomName, perDay, shift, firstDes, secondDes, thirdDes, img } = eService
    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div>
                    <div class="bg-base-100 shadow-xl">
                        <figure><img src={img} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="text-3xl">{roomName}</h2>
                            <h4 className='text-5xl text-primary'>${perDay}<small className='text-sm text-[#777]'>/ {shift}</small></h4>
                            <div className='text-lg text-[#777]'>
                                <p className='flex items-center gap-2 '><IoCheckmarkOutline className='text-primary text-xl' />{firstDes}</p>
                                <p className='flex items-center gap-2'><IoCheckmarkOutline className='text-primary text-xl' />{secondDes}</p>
                                <p className='flex items-center gap-2'><AiOutlineClose className='text-xl text' />{thirdDes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default ExtraService;