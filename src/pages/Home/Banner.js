import { GrStar } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import { Autoplay, Pagination } from "swiper";
import banner1 from '../../images/banner/1.jpg'
import banner2 from '../../images/banner/2.jpg'
import banner3 from '../../images/banner/3.jpg'
import Navbar from '../Shared/Navbar';
const banners = [
  { id: 1, img: banner1 },
  { id: 2, img: banner2 },
  { id: 3, img: banner3 },
]
const Banner = () => {
  return (
      <div className="w-full">
        <Navbar></Navbar>
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          slidesPerGroup={1}
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}

          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          // modules={[Autoplay, Pagination]}
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
              <div className='text-white text-center mt-12 lg:mt-40'>
                <div className='flex justify-center lg:text-xl text-sm mb-6 text-secondary'>
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                </div>
                <p className='lg:text-lg md:text-sm text-xs uppercase mb-6 tracking-[4px]'>The Ultimate Luxury Experience</p>
                <h2 className='lg:text-6xl md:text-3xl text-xl uppercase lg:w-3/4 w-full mx-auto mb-7 leading-loose tracking-[8px]'>Enjoy The Best Moments of Life</h2>
                <button className=" bg-transparent tracking-widest border px-5 py-3 lg:my-0 my-5 uppercase"><a href="#room&suites">Rooms & Suites</a></button>
              </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
  );
};

export default Banner;