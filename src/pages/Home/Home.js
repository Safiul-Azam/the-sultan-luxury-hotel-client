import React from 'react';
import Banner from './Banner';
import EnjoyLuxury from './EnjoyLuxury';
import ExtraServices from './ExtraServices';
import PromotionalVideo from './PromotionalVideo';
import HomesSuites from './RoomsSuites';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <EnjoyLuxury></EnjoyLuxury>
          <HomesSuites></HomesSuites>
          <ExtraServices></ExtraServices>
          <PromotionalVideo></PromotionalVideo>
        </div>
    );
};

export default Home;