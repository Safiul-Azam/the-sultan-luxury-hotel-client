import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go'

const Featured = () => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    console.log(features);
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                features.map(feature => <div className="bg-base-100 px-5 py-5 rounded-xl">
                    <div className="flex space-x-10 items-center">
                        <img className='w-12' src={feature.photo} alt="" />
                        <div>
                            {feature.earning ? <h2 className="text-3xl font-bold text-green-400"> ${feature.earning}</h2> : <h2 className='text-3xl font-bold text-green-400'>{feature.counts}</h2>}
                            <p className='text-lg mb-1'>{feature.title}</p>
                            <h3 className='flex items-center text-xs'>{feature.growth >= 20 ?<GoArrowSmallUp className='border rounded-full bg-green-100 text-green-500 mr-1 text-lg'/>:<GoArrowSmallDown className='border rounded-full bg-red-100 text-red-500 mr-1 text-lg'/>}{feature.growth}% (30 days)</h3>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Featured;