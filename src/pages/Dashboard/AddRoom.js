import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { toast } from 'react-toastify';

const AddRoom = () => {
    const [file, setFile] = useState('')
    const [roomInfo, setRoomInfo] = useState({})
    const handleChange = e => {
        setRoomInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'upload')
        try {
            const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/Safiul-projects/image/upload', data)
            const { url } = uploadRes.data;
            const newRoom = {
                ...roomInfo,
                photos: url,
            }
            const res = await axios.post('http://localhost:5000/api/rooms', newRoom)
            console.log(res);
            if (res.status === 200) {
                toast.success('Your added a new rooms :)')
            };
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className='lg:w-3/4 md:w-1/2 w-full mx-auto mb-16 mt-10'>
                <h2 className="text-5xl text-gray-500 text-center">Add New Room</h2>
                <hr className='mb-8 w-1/2 border-2 bg-gray-400 mt-3 mx-auto' />
                <div className=''>
                    <div className=''>
                        <img className='w-40 h-40 mx-auto rounded'
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div className="form-control w-full ">
                            <label className='flex items-center space-x-3 text-xl text-primary' htmlFor="file">
                                Upload Image: <AiOutlineCloudUpload />
                            </label>
                            <input
                                className='input input-bordered w-full rounded-none text-lg'
                                type="file"
                                id="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>
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
                        <input className='input p-0 text-sm mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-full col-span-2 mx-auto' type="submit" value='ADD NEW ROOM' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoom;