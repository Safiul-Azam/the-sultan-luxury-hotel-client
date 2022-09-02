import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

import spaBanner1 from '../../images/spa/1.jpg'
import spaBanner2 from '../../images/spa/2.jpg'
import spaBanner3 from '../../images/spa/3.jpg'
import Navbar from '../Shared/Navbar';
const spaBanners = [
    { id: 1, img: spaBanner1 },
    { id: 2, img: spaBanner2 },
    { id: 3, img: spaBanner3 },
]

const SpaBanner = () => {
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
                spaBanners.map(banner => <SwiperSlide
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

export default SpaBanner;