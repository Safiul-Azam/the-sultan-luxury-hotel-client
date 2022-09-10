import React from 'react';
import { GrStar } from 'react-icons/gr';
import { AiOutlineClockCircle } from 'react-icons/ai';

const RestaurantInfo = () => {
    return (
        <div className=' lg:w-[1150px] mx-auto my-24'>
            <div className='flex text-xl mb-4 text-secondary'>
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                    </div>
                    <p style={{ letterSpacing: '5px' }} className='text-normal uppercase mb-4'>AN EXPERIENCE FOR THE SENSES</p>
                    <h2 className='text-5xl mb-7 text-black'>The Restaurant</h2>
                    <p className='text-lg mb-4 text-[#777]'>Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience. The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights and sounds of the culinary artistry on display. The menu showcases both Asian and European influences, with a tempting selection of classic favorites and creative dishes for you to sample. Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high glass walls, where our knowledgeable staff can introduce you to some of New York's greatest culinary treasures.</p>
                    <h3 className='text-2xl mb-3 mt-6'>Hours</h3>
                    <ul className='space-y-2'>
                        <li className='flex items-center text-lg text-[#666]'><AiOutlineClockCircle className='mr-2 text-primary text-xl'/>Breakfast: 7.00 am – 11.00 am (daily)</li>
                        <li className='flex items-center text-lg text-[#666]'><AiOutlineClockCircle className='mr-2 text-primary text-xl'/>Lunch: 12.00 noon – 2.00 pm (daily)</li>
                        <li className='flex items-center text-lg text-[#666]'><AiOutlineClockCircle className='mr-2 text-primary text-xl'/>Dinner: open from 6.30 pm, last order at 10.00 pm (daily)</li>
                    </ul>
                    <h3 className='text-2xl mb-2 mt-6'>Dress Code</h3>
                    <p className='text-lg text-[#666]'>Smart casual (no shorts, hats, or sandals permitted)</p>
                    <h3 className='text-2xl mb-2 mt-6'>Terrace</h3>
                    <p className='text-lg text-[#666]'>Open for drinks only</p>
        </div>
    );
};

export default RestaurantInfo;