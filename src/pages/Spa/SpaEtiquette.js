import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SpaEtiquette = () => {
    const [etiquettes, setEtiquettes] = useState([])
    useEffect(() => {
        fetch('spa.json')
            .then(res => res.json())
            .then(data => setEtiquettes(data))
    }, [])
    return (
        <div className='bg-[#F8F5F0] py-28'>
            <div className='container mx-auto'>
                <p className='text-lg text-gray-500 uppercase mb-4 tracking-[5px] px-4 lg:px-0'>F.A.QS</p>
                <h2 className='lg:text-5xl text-3xl mb-7 text-[#222] px-4 lg:px-0'>Spa Etiquette</h2>
                <div className='space-y-3'>
                    {
                        etiquettes.map(etiquette => <div key={etiquette.id}>
                            <div tabIndex="0" className="collapse peer bg-white px-2 lg:px-8 py-3">
                            <input type="checkbox" className="peer collapse-plus" /> 
                                <div className="collapse-title text-2xl font-medium">
                                    <h3>{etiquette.question}</h3>
                                </div>
                                <div className="collapse-content">
                                    <p className='text-xl text-gray-500'>{etiquette.answer}</p>
                                </div>
                            </div>

                        </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default SpaEtiquette;