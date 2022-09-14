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
        <div className='bg-[#222] lg:py-28 py-12 px-5 lg:px-0'>
            <div className=' container mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-sm text-primary uppercase mb-3'>HOTEL BLOG</p>
                <h2 className='lg:text-5xl text-4xl mb-5 text-white'>Our Blogs</h2>
                <Swiper
                
                    // slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
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
                                    <h2 className='lg:text-xl text-lg'>{blog.description}</h2>
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