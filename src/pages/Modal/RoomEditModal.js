import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RoomEditModal = ({ id }) => {
    const [roomInfo, setRoomInfo] = useState({})
    const handleChange = e => {
        setRoomInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    console.log(id);
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.update(`localhost:5000/api/rooms/${id}`,roomInfo)
            console.log(res);
            if (res.status === 200) {
                toast.success('Your added a new rooms :)')
            };
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="">
                <div className="w-11/12 max-w-5xl relative pt-10">
                
                    <form className='space-y-4' onSubmit={handleSubmit}>

                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="title"
                                onChange={handleChange}
                                placeholder="Room Title"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="number"
                                id="price"
                                onChange={handleChange}
                                placeholder="Per day Price"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="shift"
                                onChange={handleChange}
                                placeholder="Shift"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="pet"
                                onChange={handleChange}
                                placeholder="Is Pet Allowed"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="extraBeds"
                                onChange={handleChange}
                                placeholder="Extra Beds Facility"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none bg-transparent "
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="instructions"
                                onChange={handleChange}
                                placeholder="Instructions"
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