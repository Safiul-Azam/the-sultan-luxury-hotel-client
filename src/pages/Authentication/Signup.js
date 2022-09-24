import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Authentication from './Authentication';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../Shared/Spinner';

const Signup = () => {
    const [file, setFile] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/'
    console.log(from);
    const { loading, error, dispatch } = useContext(AuthContext)
    const handleChange = e => {
        setUserInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        const data = new FormData()
        data.append('file',file)
        data.append('upload_preset', 'upload')
        try {
            const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/Safiul-projects/image/upload', data)
            const {url}= uploadRes.data;
            const newUser = {
                ...userInfo,
                img: url,
            }
            const res = await axios.post('https://sultan-hotel-1.onrender.com/api/auth/register',newUser)
            if(res.status === 200){
                navigate(from, {replace:true})
                dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
                toast.success('your registration is completed :)')
            };
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
        }
    }
    if(loading){
        return <Spinner/>
    }
    return (
        <div>
            <Authentication></Authentication>
            <div className='lg:w-3/4 md:w-1/2 w-full mx-auto lg:p-10 p-2 lg:mt-24 mt-12 mb-16'>
                <h2 className="lg:text-5xl text-3xl text-gray-500 text-center">Signup</h2>
                <hr className='lg:mb-20 mb-10 lg:w-1/3 w-3/4  border-2 bg-gray-400 mt-3 mx-auto' />
                <div className='lg:grid grid-cols-3 lg:gap-x-10'>
                    <div className=''>
                        <img className='w-40 h-40 mx-auto rounded-full'
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                        <h4 className='text-sm mt-20 lg:flex hidden text-center'>New to Sultan Luxury Hotel? <Link className='text-primary' to='/signup'>Create new account</Link></h4>
                    </div>
                    <form className='lg:grid grid-cols-2 lg:gap-8 col-span-2 space-y-4' onSubmit={handleSubmit}>
                        <div className="form-control w-full ">
                            <label className='flex items-center justify-center my-2 space-x-3 text-xl text-green-500' htmlFor="file">
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
                                placeholder="Enter Your Name"
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
                    <h4 className='text-xs mt-10 lg:hidden text-center'>Already have an account?<Link className='text-primary' to='/login'>please login</Link></h4>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Signup;