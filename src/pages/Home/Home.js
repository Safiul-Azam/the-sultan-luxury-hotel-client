import React from 'react';
import Banner from './Banner';
import CheckOut from '../Booking/CheckOut';
import EnjoyLuxury from './EnjoyLuxury';
import ExtraServices from './ExtraServices';
import OurBlogs from './OurBlogs';
import OurFacilities from './OurFacilities';
import PromotionalVideo from './PromotionalVideo';
import RoomsSuites from './RoomsSuites';
import ServicesTheme from './ServicesTheme';
import Testimonials from './Testimonials';
import Banners from './Banners';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <EnjoyLuxury></EnjoyLuxury>
          <RoomsSuites></RoomsSuites>
          <ExtraServices></ExtraServices>
          <PromotionalVideo></PromotionalVideo>
          <OurFacilities></OurFacilities>
          <CheckOut></CheckOut>
          <ServicesTheme></ServicesTheme>
          <Testimonials></Testimonials>
          <OurBlogs></OurBlogs>
        </div>
    );
};

export default Home;