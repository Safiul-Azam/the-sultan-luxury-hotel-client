import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const OurBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='bg-[#222] py-28'>
            <div className='w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-sm text-primary uppercase mb-3'>HOTEL BLOG</p>
                <h2 className='text-5xl mb-5 text-white'>Our News</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        blogs.map(blog => <SwiperSlide
                            key={blog.id}

                        >
                            <div className=" relative group">
                                <div className=' overflow-hidden'>
                                    <img className='group-hover:scale-110 group-hover:duration-1000 group-hover:ease-in-out ease-in-out duration-1000' src={blog.img} alt="Shoes" />
                                </div>
                                <div className="bg-white w-5/6 mx-auto p-5 relative bottom-16 group-hover:bottom-40 group-hover:duration-300 group-hover:ease-in-out ease-in-out duration-300">
                                    <p style={{ letterSpacing: '5px' }} className=' uppercase text-sm mb-3'>{blog.serviceName}</p>
                                    <h2 className='text-2xl'>{blog.description}</h2>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default OurBlogs;