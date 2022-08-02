import React from 'react';
import CopyRight from '../Shared/CopyRight';
import Banner from './Banner';
import EnjoyLuxury from './EnjoyLuxury';
import ExtraServices from './ExtraServices';
import Footer from './Footer';
import OurFacilities from './OurFacilities';
import PromotionalVideo from './PromotionalVideo';
import HomesSuites from './RoomsSuites';
import Services from './Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <EnjoyLuxury></EnjoyLuxury>
          <HomesSuites></HomesSuites>
          <ExtraServices></ExtraServices>
          <PromotionalVideo></PromotionalVideo>
          <OurFacilities></OurFacilities>
          <Services></Services>
          <Footer></Footer>
          <CopyRight></CopyRight>
        </div>
    );
};

export default Home;