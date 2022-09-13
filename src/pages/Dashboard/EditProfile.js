import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const [file, setFile] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const handleChange = e => {
        setUserInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'upload')
        try {
            const uploadRes = await axios.put('https://api.cloudinary.com/v1_1/Safiul-projects/image/upload', data)
            const { url } = uploadRes.data;
            const newUser = {
                ...userInfo,
                img: url,
            }
            const res = await axios.put('http://localhost:5000/api/auth/register', newUser)
            if (res.status === 200) {
                toast.success('your registration is completed :)')
            };
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className='w-full mx-auto mb-16'>
                <h2 className="text-2xl mt-3 text-gray-900">Update Profile</h2>
                <hr className='mb-20 border bg-gray-400 mt-3 mx-auto' />
                <div className=''>

                    <form className='grid grid-cols-2 gap-8 col-span-2' onSubmit={handleSubmit}>
                        <div className="form-control w-full grid grid-cols-2 ">
                            <div className=''>
                                <img className='w-32 h-32 rounded-full'
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                />
                            </div>
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
                                id="userName"
                                onChange={handleChange}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="email"
                                id="email"
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">

                            <input
                                type="text"
                                id="address"
                                onChange={handleChange}
                                placeholder="Enter Your Address"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="phone"
                                onChange={handleChange}
                                placeholder="Enter Your Number"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full ">
                            <input
                                type="password"
                                id="password"
                                onChange={handleChange}
                                placeholder="Enter Password"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <input className='input p-0 text-sm mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-1/2 col-span-2 mx-auto' type="submit" value='SIGN UP' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;