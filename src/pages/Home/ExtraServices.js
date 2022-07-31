import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import ExtraSection1 from '../../images/photo/Extra-Services-1.jpg'
import ExtraSection2 from '../../images/photo/Extra-Services-2.jpg'
const ExtraServices = () => {
    return (
        <div className='bg-[#222222] py-24'>
            <div className='w-[1150px] mx-auto grid grid-cols-3 gap-10'>
                <div>
                    <p style={{ letterSpacing: '6px' }} className='text-lg text-primary uppercase mb-4'>BEST PRICES</p>
                    <h2 className='text-6xl mb-7 text-white'>Extra Services</h2>
                    <p className='text-xl mb-4 text-[#adadad]'>The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
                    <p className='text-xl mb-6 text-[#adadad]'>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
                    <div className='flex justify-start items-center'>
                        <FiPhoneCall className='text-4xl mr-8 text-primary' />
                        <p className='text-lg text-[#adadad]'>For information <p className='block text-2xl text-primary tracking-widest'>855 100 4444</p></p>
                    </div>
                </div>
                <div>
                    <div class=" bg-base-100 shadow-xl">
                        <figure><img src={ExtraSection1} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Shoes!
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <div class="badge badge-outline">Fashion</div>
                                <div class="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={ExtraSection2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraServices;