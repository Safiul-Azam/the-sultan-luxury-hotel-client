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
    useEffect(() => {
        fetch('foodMenu.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    const selected = menus.filter(menu => menu?.menuName === clickBtn)
    return (
        <div className='bg-[#222222] py-28'>
            <div className=' w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-primary uppercase mb-4 text-center'>LUXURY HOTEL</p>
                <h2 className='text-4xl mb-7 text-center text-white'>Restaurant Menu</h2>


                <div className='w-5/6 mx-auto relative'>
                    <Swiper
                        slidesPerView={4}
                        slidesPerGroup={1}
                        parallax={true}

                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={false}
                        modules={[Navigation]}
                        className="mySwiper text-center mb-20 px-10 absolute left-10 right-11"
                    >
                        <div>
                        {
                            menus.map(menu => <SwiperSlide className={`text-3xl text-white ${menu.menuName === clickBtn ? "border text-center p-3":"border-none text-center p-3"}`}>
                                <div>
                                    <button onClick={() => setClickBtn(menu.menuName)}>{menu.menuName}</button>
                                </div>
                            </SwiperSlide>
                            )
                        }
                        </div>
                    </Swiper>
                </div>
                {
                    selected.map(single => <RestaurantSingleMenu
                        key={single._id}
                        single={single}
                    ></RestaurantSingleMenu>)
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;