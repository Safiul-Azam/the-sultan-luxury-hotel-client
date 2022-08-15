import React from 'react';
import Banner from './Banner';
import CheckOut from './CheckOut';
import EnjoyLuxury from './EnjoyLuxury';
import ExtraServices from './ExtraServices';
import OurBlogs from './OurBlogs';
import OurFacilities from './OurFacilities';
import PromotionalVideo from './PromotionalVideo';
import HomesSuites from './RoomsSuites';
import ServicesTheme from './ServicesTheme';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <EnjoyLuxury></EnjoyLuxury>
          <HomesSuites></HomesSuites>
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