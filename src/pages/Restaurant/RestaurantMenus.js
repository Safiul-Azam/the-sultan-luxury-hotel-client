import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RestaurantSingleMenu from './RestaurantSingleMenu';

const RestaurantMenu = () => {
    const [menus, setMenus] = useState([])
    const [clickBtn, setClickBtn] = useState('Salads')
    useEffect(() => {
        fetch('http://localhost:5000/restaurantMenu')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    console.log(menus);
    const selected = menus.filter(menu => menu?.menuName === clickBtn)
    return (
        <div className='bg-[#222222] py-24'>
            <div className=' w-[1150px] mx-auto'>
                <p style={{ letterSpacing: '5px' }} className='text-primary uppercase mb-4 text-center'>LUXURY HOTEL</p>
                <h2 className='text-4xl mb-7 text-center text-white'>Restaurant Menu</h2>


                <div className='grid grid-cols-6 w-3/4 mx-auto '>
                    {
                        menus.map(menu => {
                            return <div key={menu.id}>
                                <button onClick={() => setClickBtn(menu.menuName)} className='btn btn-outline-primary rounded-none'>{menu.menuName}</button>
                            </div>
                        })
                    }
                </div>
                <div>
                    {
                        selected.map(single => <RestaurantSingleMenu
                            key={single.id}
                            single={single}
                        ></RestaurantSingleMenu>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;