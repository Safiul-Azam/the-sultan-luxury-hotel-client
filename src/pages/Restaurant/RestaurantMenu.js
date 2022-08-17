import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const RestaurantMenu = () => {
    const [menus, setMenus] = useState([])
    useEffect(() => {
        fetch('foodMenu.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    return (
        <div className='bg-[#222222]'>
            <div className='grid grid-cols-6'>
                {
                    menus.map(menu => {
                        return <div key={menu.id}>
                            <button className='btn btn-outline-primary'>{menu.menuName}</button>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default RestaurantMenu;