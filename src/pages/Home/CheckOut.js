import React from 'react';

const CheckOut = () => {
    return (
        <div className='bg-[#F8F5F0]'>
            <div className='w-[1150px] mx-auto my-28 py-24'>
                <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-4'>CHECK NOW</p>
                <h2 className='text-5xl mb-7 text-black'>Search Rooms</h2>
                <div className='grid grid-cols-6 gap-1'>
                    <input className='py-4 px-8' type="date" name="" id="" placeholder='Check in' />
                    <input className='py-4 px-8' type="date" name="" id="" placeholder='Check out' />
                    <select className='py-4 px-8' name="" id="">
                        <option value="">Adult1</option>
                        <option value="">Adult2</option>
                        <option value="">Adult3</option>
                        <option value="">Adult4</option>
                    </select>
                    <select className='py-4 px-8' name="" id="">
                        <option value="">Children1</option>
                        <option value="">Children2</option>
                        <option value="">Children3</option>
                        <option value="">Children4</option>
                        <option value="">Children5</option>
                    </select>
                    <select className='py-4 px-8 bg-primary ' name="" id="">
                        <option value="">Room1</option>
                        <option value="">Room2</option>
                        <option value="">Room3</option>
                        <option value="">Room4</option>
                        <option value="">Room5</option>
                    </select>
                    <input style={{ letterSpacing: '2px' }} className='py-4 px-8 text-sm text-white bg-primary hover:bg-[#222222] hover:duration-300 hover:ease-in ease-in duration-300' type="button" value="CHECK NOW" />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;