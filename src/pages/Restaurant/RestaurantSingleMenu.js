import React from 'react';

const RestaurantSingleMenu = ({single}) => {
    console.log(single);
    // const {firstItem, firstItemInfo, firstItemPrice} = selected?.first
    // const {secondItem, secondItemInfo, secondItemPrice} = selected?.second
    // const {thirdItem, thirdItemInfo, thirdItemPrice}= selected?.third
    // const {forthItem, forthItemInfo, forthItemPrice} = selected?.forth
    // const {fifthItem, fifthItemInfo, fifthItemPrice} = selected?.fifth
    // const {sixthItem, sixthItemInfo, sixthItemPrice} = selected?.sixth
    const {first, second, third, forth, fifth, sixth} = single
    return (
        <div>
            <div>
            <div>
                <div className='text-white'>
                    <h2 className='text-primary'>{first?.firstItem}</h2>
                    <h2>{first?.firstItemPrice}</h2>
                </div>
                <p>{first?.firstItemInfo}</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
    );
};

export default RestaurantSingleMenu;