import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import RestaurantSingleMenu from './RestaurantSingleMenu';

const RestaurantMenu = () => {
    const [menus, setMenus] = useState([])
    const [clickBtn, setClickBtn] = useState('Salads')
    const [cus, setCus] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/restaurantMenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    const selected = menus.filter(menu => menu?.menuName === clickBtn)
    return (
        <div className='bg-[#222222] py-24'>
            <div className=' w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-primary uppercase mb-4 text-center'>LUXURY HOTEL</p>
                <h2 className='text-4xl mb-7 text-center text-white'>Restaurant Menu</h2>


                <div className='w-5/6 mx-auto'>
                    <Swiper
                        slidesPerView={4}
                        slidesPerGroup={1}
                        parallax={true}

                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper mb-16 menuSlide"
                    >
                        {
                            menus.map(menu => <SwiperSlide onClick={() => setCus(!cus)} className={cus ? "border text-center py-3" : 'border-none text-center py-3'}>
                                <div>
                                    <button onClick={() => setClickBtn(menu.menuName)} className='text-white text-3xl'>{menu.menuName}</button>
                                </div>
                            </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                {
                    selected.map(single => <RestaurantSingleMenu
                        key={single.id}
                        single={single}
                    ></RestaurantSingleMenu>)
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;