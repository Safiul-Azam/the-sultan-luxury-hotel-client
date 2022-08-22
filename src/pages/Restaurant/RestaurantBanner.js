import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import banner1 from '../../images/restaurant/1.jpg'
import banner2 from '../../images/restaurant/2.jpg'
import banner3 from '../../images/restaurant/3.jpg'
import Navbar from '../Shared/Navbar';
const banners = [
    { id: 1, img: banner1 },
    { id: 2, img: banner2 },
    { id: 3, img: banner3 },
]

const RestaurantBanner = () => {
    return (
        <div>
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
                    banners.map(banner => <SwiperSlide
                        key={banner.id}
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

export default RestaurantBanner;