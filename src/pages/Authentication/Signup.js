import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer'
import Authentication from './Authentication';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Login = () => {
    const [file, setFile] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const handleChange = e => {
        setUserInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async e => {

    }

    return (
        <div>
            <Authentication></Authentication>
            <div className='lg:w-3/4 md:w-1/2 w-full mx-auto p-10  mt-28 mb-16'>
                <h2 className="text-5xl text-black text-center">Signup</h2>
                <hr className='mb-20 w-1/3 border-2 bg-gray-400 mt-3 mx-auto' />
                <div className='grid grid-cols-3 gap-x-10'>
                    <div className=''>
                        <img className='w-1/2 mx-auto rounded-full'
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                        <h4 className='text-sm mt-20 text-center'>New to Sultan Luxury Hotel? <Link className='text-primary' to='/signup'>Create new account</Link></h4>
                    </div>
                    <form className='grid grid-cols-2 gap-8 col-span-2' onSubmit={handleSubmit}>
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
                                id="firstName"
                                onChange={handleChange}
                                placeholder="Enter Your First Name"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">

                            <input
                                type="text"
                                id="lastName"
                                onChange={handleChange}
                                placeholder="Enter Your Last Name"
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
                                type="Number"
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
                        <div className="form-control w-full ">

                            <input
                                type="password"
                                id="ConfirmPassword"
                                onChange={handleChange}
                                placeholder="Enter Confirm Password"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                        </div>
                        <input className='input p-0 text-sm mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-1/2 col-span-2 mx-auto' type="submit" value='LOGIN' />
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;