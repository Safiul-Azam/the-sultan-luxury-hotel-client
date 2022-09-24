import { GrStar } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import banner1 from '../../images/banner/1.jpg'
import banner2 from '../../images/banner/2.jpg'
import banner3 from '../../images/banner/3.jpg'
import Navbar from '../Shared/Navbar';
const banners = [
  { id: 1, img: banner1, title:'Enjoy The Best Moments of Life', subTitle:'The Ultimate Luxury Experience' },
  { id: 2, img: banner2, title:'Enjoy a Luxury Experience', subTitle:'Luxury Hotel & Best Resort' },
  { id: 3, img: banner3, title:'The Perfect Base For You', subTitle:'Unique Place to Relax & Enjoy' },
]
const Banner = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
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
            <div className='text-white text-center mt-44 lg:mt-40'>
              <div className='flex justify-center lg:text-xl text-sm mb-6 text-secondary'>
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
                <GrStar />
              </div>
              <p className='lg:text-lg md:text-lg text-sm uppercase mb-6 lg:tracking-[10px] tracking-[4px]'>{banner.subTitle}</p>
              <h2 className='lg:text-6xl md:text-4xl text-3xl uppercase lg:w-3/4 w-11/12 mx-auto mb-7 lg:tracking-[20px] lg:leading-relaxed md:leading-relaxed sm:leading-relaxed tracking-[8px]'>{banner.title}</h2>
              <button className='py-4 px-5 bg-transparent hover:bg-black rounded-none text-white hover:border-black hover:duration-500 lg:tracking-[5px] tracking-widest border hover:ease-in-out ease-in-out duration-500 uppercase'>Rooms & Suites</button>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Banner;