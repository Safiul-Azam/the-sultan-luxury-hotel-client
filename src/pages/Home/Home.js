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
import CheckForm from '../Booking/CheckForm';
import Footer from '../Shared/Footer'

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
      <CheckForm></CheckForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;