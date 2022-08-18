import React from 'react';
import RestaurantBanner from './RestaurantBanner';
import RestaurantInfo from './RestaurantInfo';
import RestaurantMenus from './RestaurantMenus';

const Restaurant = () => {
    return (
        <div>
            <RestaurantBanner></RestaurantBanner>
            <RestaurantInfo></RestaurantInfo>
            <RestaurantMenus></RestaurantMenus>
        </div>
    );
};

export default Restaurant;