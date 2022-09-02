import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

import Banner1 from '../../images/banner/2.jpg'
import Banner2 from '../../images/banner/3.jpg'
import Banner3 from '../../images/banner/6.jpg'
import Navbar from '../Shared/Navbar';
const roomBanners = [
    { id: 1, img: Banner1 },
    { id: 2, img: Banner2 },
    { id: 3, img: Banner3 },
]

const RoomDetailsBanner = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
        <Swiper
            centeredSlides={true}
            slidesPerView={1}
                slidesPerGroup={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                
                loop={true}
                loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-screen"
        >
            {
                roomBanners.map(banner => <SwiperSlide
                    key={banner._id}
                    className='pt-6'
                    style={
                        {
                            background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${banner.img})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }
                    }
                >
                </SwiperSlide>)
            }
        </Swiper>
    </div>
    );
};

export default RoomDetailsBanner;