import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Featured = () => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    console.log(features);
    return (
        <div>
            {
                features.map(feature => <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={feature.photo} alt="" />
                       {feature.earning ? <h2 className="text-3xl"> ${feature.earning}</h2>:<h2 className='text-3xl'>{feature.counts}</h2>}
                        <p>{feature.title}</p>
                        <p>{feature.growth}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Featured;