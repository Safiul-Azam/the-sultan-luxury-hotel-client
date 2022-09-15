import React, { useEffect, useState } from 'react';
import img from '../../images/banner/2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { GrStar } from 'react-icons/gr';
import quot from '../../images/icons/quot.png'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('Testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='text-white' style={
            {
                background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }
        }>
            <div className=' lg:w-[688px] mx-auto lg:py-20 py-12 px-4 lg:px-10 text-white'>
                <p style={{ letterSpacing: '5px' }} className='text-sm uppercase mb-3'>TESTIMONIALS</p>
                <h2 className='text-3xl mb-3'>What Client's Say?</h2>
                <hr className='w-16 opacity-25' />
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide
                            key={testimonial.id}
                            testimonial={testimonial}
                        >
                            <p className='text-lg tracking-wide mt-3 mb-8'>{testimonial.description}</p>
                            <div className='mb-16'>
                                <div className='flex  justify-between items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={testimonial.img} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex text-secondary mb-1'>
                                                <GrStar />
                                                <GrStar />
                                                <GrStar />
                                                <GrStar />
                                                <GrStar />
                                            </div>
                                            <p className=' uppercase my-1' style={{ letterSpacing: '3px' }}>{testimonial.reviewMan}</p>
                                            <p>{testimonial.reviewTitle}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='w-16 opacity-25' src={quot} alt="" />
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;