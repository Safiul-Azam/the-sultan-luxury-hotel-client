import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';

const RoomEditModal = () => {
    const [roomInfo, setRoomInfo] = useState({})
    const location = useLocation()
    const id = location?.pathname.split('/')[3]
    const handleChange = e => {
        setRoomInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const {data} = useFetch(`https://sultan-hotel-1.onrender.com/api/rooms/find/${id}`)
    console.log(data);
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.put(`https://sultan-hotel-1.onrender.com/api/rooms/${id}`,roomInfo)
            console.log(res);
            if (res.status === 200) {
                toast.success('Room information is updated :)')
            };
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="">
                <div className="w-11/12 max-w-5xl relative pt-10">
                <h2 className="text-2xl text-gray-500 text-center">Edit Room id :  {data._id}</h2>
                <h2 className='text-2xl text-gray-500 text-center'>Name : {data.title}</h2>
                <hr className='mb-8 w-1/2 border-2 bg-gray-400 mt-3 mx-auto' />
                <div className=''>
                        <img className='w-80 h-80 mx-auto rounded'
                            src={data.photos}
                            alt=""
                        />
                    </div>
                    <form className='space-y-4' onSubmit={handleSubmit}>

                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="title"
                                onChange={handleChange}
                                placeholder={data.title}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="number"
                                id="price"
                                onChange={handleChange}
                                placeholder={`$${data.price}`}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="shift"
                                onChange={handleChange}
                                placeholder={data.shift}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="pet"
                                onChange={handleChange}
                                placeholder={data.pets}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="extraBeds"
                                onChange={handleChange}
                                placeholder={data.extraBeds}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="instructions"
                                onChange={handleChange}
                                placeholder={data.instructions}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="checkIn"
                                onChange={handleChange}
                                placeholder="Check In Time"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="checkOut"
                                onChange={handleChange}
                                placeholder="Check Out Time"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="description"
                                onChange={handleChange}
                                placeholder="Description"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <input className='input p-0 text-sm mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-full col-span-2 mx-auto' type="submit" value='EDIT ROOM' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default RoomEditModal;