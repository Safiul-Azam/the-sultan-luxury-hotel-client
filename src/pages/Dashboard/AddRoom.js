import React from 'react';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AddRoom = () => {
    const [file, setFile] = useState('')

    const handleChange = ()=>{
        
    }
    const handleSubmit = ()=>{

    }
    return (
        <div>
            <div className='lg:w-3/4 md:w-1/2 w-full mx-auto p-10  mt-28 mb-16'>
                <h2 className="text-5xl text-black text-center">Signup</h2>
                <hr className='mb-20 w-1/3 border-2 bg-gray-400 mt-3 mx-auto' />
                <div className=''>
                    <div className=''>
                        <img className='w-1/2 h-56 mx-auto rounded'
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
                            <label className='flex items-center space-x-3 text-xl text-green-500' htmlFor="file">
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
                        <input className='input p-0 text-sm mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-1/2 col-span-2 mx-auto' type="submit" value='LOGIN' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoom;