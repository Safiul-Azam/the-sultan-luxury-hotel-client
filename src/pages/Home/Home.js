import React from "react";
import Banner from "./Banner";
import CheckOut from "../Booking/CheckOut";
import EnjoyLuxury from "./EnjoyLuxury";
import ExtraServices from "./ExtraServices";
import OurBlogs from "./OurBlogs";
import OurFacilities from "./OurFacilities";
import PromotionalVideo from "./PromotionalVideo";
import RoomsSuites from "./RoomsSuites";
import ServicesTheme from "./ServicesTheme";
import Testimonials from "./Testimonials";
import CheckForm from "../Booking/CheckForm";
import Footer from "../Shared/Footer";
import RestaurantMenus from "../Restaurant/RestaurantMenus";

const Home = () => {
  return (
    <div>
      <Banner />
      <EnjoyLuxury />
      <RoomsSuites />
      <ExtraServices />
      <PromotionalVideo />
      <OurFacilities />
      <CheckOut />
      <ServicesTheme />
      <RestaurantMenus />
      <Testimonials />
      <OurBlogs />
      <CheckForm />
      <Footer />
    </div>
  );
};

export default Home;
