import React from 'react';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const EditProfile = () => {
    const { user } = useContext(AuthContext)
    const id = user._id
    const [file, setFile] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const handleChange = e => {
        setUserInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    console.log(user);
    const handleSubmit = async e => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'upload')
        try {
            const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/Safiul-projects/image/upload', data)
            const { url } = uploadRes.data;
            const updateUser = {
                ...userInfo,
                img: url,
            }
            const res = await axios.put(`http://localhost:5000/api/users/${id}`, updateUser)
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
                <h2 className="text-2xl mt-3 text-gray-800">Update Profile</h2>
                <hr className='mb-10 border bg-gray-400 mt-3 mx-auto' />
                <div className=''>

                    <form className='grid grid-cols-2 gap-6 col-span-2' onSubmit={handleSubmit}>
                        <div className="form-control grid grid-cols-2 col-span-2 w-1/2">
                            <div className=''>
                                <img className='w-32 h-32 rounded-full'
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : user?.img ||"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                    }
                                    alt=""
                                />
                            </div>
                            <label className='flex items-center space-x-3 text-xl text-primary' htmlFor="file">
                                Update Image: <AiOutlineCloudUpload />
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
                            <label className="label">
                                <h4 className="label-text text-xl">Your Full Name</h4>
                            </label>
                            <input
                                type="text"
                                id="userName"
                                onChange={handleChange}
                                value={user.userName}
                                readOnly
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <h4 className="label-text text-xl">Your Email</h4>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={user.email}
                                readOnly
                                onChange={handleChange}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <h4 className="label-text text-xl">Your Address</h4>
                            </label>
                            <input
                                type="text"
                                id="address"
                                onChange={handleChange}
                                placeholder={user.address}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <h4 className="label-text text-xl">Your City</h4>
                            </label>
                            <input
                                type="text"
                                id="city"
                                onChange={handleChange}
                                placeholder={user.city||'Your City'}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <h4 className="label-text text-xl">Your District</h4>
                            </label>
                            <input
                                type="text"
                                id="district"
                                onChange={handleChange}
                                placeholder={user.district||'District'}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <h4 className="label-text text-xl">Your Street Address</h4>
                            </label>
                            <input
                                type="text"
                                id="street"
                                onChange={handleChange}
                                placeholder={user.street||'Street Address'}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <h4 className="label-text text-xl">Your Phone</h4>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                onChange={handleChange}
                                placeholder={user.phone}
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <input className='input p-0 text-sm mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-1/3 col-span-2 mx-auto' type="submit" value='UPDATE YOUR PROFILE' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;