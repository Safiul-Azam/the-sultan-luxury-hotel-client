import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const MeetTeam = () => {
    const [meetTeams, setMeetTeams] = useState([])
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setMeetTeams(data))
    }, [])
    return (
        <div className='bg-[#F8F5F0] py-28'>
            <div className=' lg:w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>PROFESSIONALS</p>
                <h2 className='text-5xl mb-7 text-black'>Meet The Team</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
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
                    modules={[Navigation, Autoplay]}
                >
                    {
                        meetTeams.map(meetTeam => <SwiperSlide
                            key={meetTeam.id}
                        >
                            <div className="group">
                                <div className='group'>
                                    <img src={meetTeam.img} alt="Shoes" />
                                </div>
                                <div className="bg-white mx-auto text-center py-8 relative">
                                    <h2 className='uppercase text-lg mb-3'>{meetTeam.teamMember}</h2>
                                    <p className='text-lg text-[#666] leading-none'>{meetTeam.position}</p>

                                    <div className='group-hover:top-1 py-8 px-16 group-hover:left-12 top-28 group-hover:duration-500 bg-white absolute duration-500 left-12'>
                                        <div className=''>
                                            <ul className="flex leading-none justify-center items-center space-x-4 text-lg text-primary">
                                                <a href={meetTeam.instagram} className=" mb-4">
                                                    <FaInstagram className=''/>
                                                </a>
                                                <a href={meetTeam.twitter} className="mb-4">
                                                    <FaTwitter className=''/>
                                                </a>
                                                <a href={meetTeam.facebook} className="mb-4">
                                                    <FaFacebookF className=''/>
                                                </a>
                                                <a href={meetTeam.pinterest} className="mb-4">
                                                    <FaPinterestP className=''/>
                                                </a>
                                            </ul>
                                        </div>
                                        <p className='text-[#777] leading-3'>{meetTeam.email}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default MeetTeam;