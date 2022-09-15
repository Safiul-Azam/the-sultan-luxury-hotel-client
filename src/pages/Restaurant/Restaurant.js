import React from 'react';
import CheckForm from '../Booking/CheckForm';
import Footer from '../Shared/Footer';
import RestaurantBanner from './RestaurantBanner';
import RestaurantInfo from './RestaurantInfo';
import RestaurantMenus from './RestaurantMenus';

const Restaurant = () => {
    return (
        <div>
            <RestaurantBanner></RestaurantBanner>
            <RestaurantInfo></RestaurantInfo>
            <RestaurantMenus></RestaurantMenus>
            <CheckForm/>
            <Footer/>
        </div>
    );
};

export default Restaurant;