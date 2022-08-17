import React from 'react';
import RestaurantBanner from './RestaurantBanner';
import RestaurantInfo from './RestaurantInfo';
import RestaurantMenu from './RestaurantMenu';

const Restaurant = () => {
    return (
        <div>
            <RestaurantBanner></RestaurantBanner>
            <RestaurantInfo></RestaurantInfo>
            <RestaurantMenu></RestaurantMenu>
        </div>
    );
};

export default Restaurant;