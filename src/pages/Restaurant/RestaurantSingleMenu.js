import React from 'react';

const RestaurantSingleMenu = ({single}) => {
    const {first, second, third, forth, fifth, sixth} = single
    return (
        <div>
            <div className='grid grid-cols-2 gap-x-56 space-y-4'>
            <div className=''>
                <div className='text-white flex justify-between items-center text-xl'>
                    <h2 className='text-primary'>{first?.firstItem}</h2>
                    <h2 className='text-accent'>{first?.firstItemPrice}$</h2>
                </div>
                    <hr className=' border-dashed border-primary my-2' />
                <p className='text-accent text-lg'>{first?.firstItemInfo}</p>
            </div>
            <div className=''>
                <div className='text-white flex justify-between items-center text-xl'>
                    <h2 className='text-primary'>{second?.secondItem}</h2>
                    <h2 className='text-accent'>{second?.secondItemPrice}$</h2>
                </div>
                    <hr className=' border-dashed border-primary my-2' />
                <p className='text-accent text-lg'>{second?.secondItemInfo}</p>
            </div>
            <div className=''>
                <div className='text-white flex justify-between items-center text-xl'>
                    <h2 className='text-primary'>{third?.thirdItem}</h2>
                    <h2 className='text-accent'>{third?.thirdItemPrice}$</h2>
                </div>
                    <hr className=' border-dashed border-primary my-2' />
                <p className='text-accent text-lg'>{third?.thirdItemInfo}</p>
            </div>
            <div className=''>
                <div className='text-white flex justify-between items-center text-xl'>
                    <h2 className='text-primary'>{forth?.forthItem}</h2>
                    <h2 className='text-accent'>{forth?.forthItemPrice}$</h2>
                </div>
                    <hr className=' border-dashed border-primary my-2' />
                <p className='text-accent text-lg'>{forth?.forthItemInfo}</p>
            </div>
            <div className=''>
                <div className='text-white flex justify-between items-center text-xl'>
                    <h2 className='text-primary'>{fifth?.fifthItem}</h2>
                    <h2 className='text-accent'>{fifth?.fifthItemPrice}$</h2>
                </div>
                    <hr className=' border-dashed border-primary my-2' />
                <p className='text-accent text-lg'>{fifth?.fifthItemInfo}</p>
            </div>
            <div className=''>
                <div className='text-white flex justify-between items-center text-xl'>
                    <h2 className='text-primary'>{sixth?.sixthItem}</h2>
                    <h2 className='text-accent'>{sixth?.sixthItemPrice}$</h2>
                </div>
                    <hr className=' border-dashed border-primary my-2' />
                <p className='text-accent text-lg'>{sixth?.sixthItemInfo}</p>
            </div>
            </div>
        </div>
    );
};

export default RestaurantSingleMenu;