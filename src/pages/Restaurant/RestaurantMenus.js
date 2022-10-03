import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import RestaurantSingleMenu from "./RestaurantSingleMenu";

const RestaurantMenu = () => {
  const [menus, setMenus] = useState([]);
  const [clickBtn, setClickBtn] = useState("Breakfast");
  useEffect(() => {
    fetch("foodMenu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  const selected = menus.filter((menu) => menu?.menuName === clickBtn);
  return (
    <div className="bg-[#222222] py-20">
      <div className="container mx-auto">
        <p
          style={{ letterSpacing: "5px" }}
          className="text-primary uppercase mb-4 text-center"
        >
          LUXURY HOTEL
        </p>
        <h2 className="text-4xl mb-7 text-center text-white">
          Restaurant Menu
        </h2>
        <div className="mx-20 mb-10">
          <Swiper
            slidesPerGroup={1}
            parallax={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper text-center"
          >
            {menus.map((menu) => (
              <SwiperSlide
                key={menu.id}
                className={`lg:text-3xl text-2xl text-white ${
                  menu.menuName === clickBtn
                    ? "border text-center p-2"
                    : "border-none text-center p-2"
                }`}
              >
                <div>
                  <button onClick={() => setClickBtn(menu.menuName)}>
                    {menu.menuName}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selected.map((single) => (
          <RestaurantSingleMenu
            key={single.id}
            single={single}
          ></RestaurantSingleMenu>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
