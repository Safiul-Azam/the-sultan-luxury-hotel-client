import React, { useEffect, useState } from 'react';
import img from '../../images/banner/2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { GrStar } from 'react-icons/gr';
import { FaQuoteRight } from 'react-icons/fa';
import quot from '../../images/icons/quot.png'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('Testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='static text-white' style={
            {
                background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }
        }>
            <div className='w-[688px] mx-auto py-20 text-white'>
                <p style={{ letterSpacing: '5px' }} className='text-sm uppercase mb-3'>TESTIMONIALS</p>
                <h2 className='text-3xl mb-3'>What Client's Say?</h2>
                <hr className='w-20' />
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,

                    }}
                    modules={[Pagination]}
                    className=""
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide
                            key={testimonial.id}
                            testimonial={testimonial}
                        >
                            <p className='text-lg mt-3 mb-8'>{testimonial.description}</p>
                            <div className='mb-16'>
                                <div className='flex  justify-between items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <div class="avatar">
                                            <div class="w-16 rounded-full">
                                                <img src={testimonial.img} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex text-secondary'>
                                                <GrStar />
                                                <GrStar />
                                                <GrStar />
                                                <GrStar />
                                                <GrStar />
                                            </div>
                                            <p className=' uppercase' style={{ letterSpacing: '5px' }}>{testimonial.reviewMan}</p>
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