import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Authentication from './Authentication';
import Spinner from '../Shared/Spinner';
import {  toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const from = location?.state?.from?.pathName || '/'
    let errorMessage;
    if(error || UpdateError){
        errorMessage = <p className='text-red-700'>{error.message || UpdateError.message}</p>
    }
    if (user) {
        navigate(from,{replace:true})
    }
    if (loading || updating) {
        return <Spinner></Spinner>
    }
    const onSubmit = async data => {
        const displayName = data.displayName
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName});
        toast.success('Sign up is completed')

    }
    return (
        <div>
            <Authentication></Authentication>
            <div className='lg:w-1/2 md:w-1/2 w-full mx-auto border p-10  mt-28 mb-16'>
                <div>
                    <h2 className="text-2xl mb-7 text-black">Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <input
                                {...register('displayName', {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                })}
                                type="text" placeholder="Your Name"
                                className="input input-bordered w-full rounded-none text-lg"

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                type="email" placeholder="Enter Your Email"
                                className="input input-bordered w-full rounded-none text-lg"

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'the password must be at least 6 characters long'
                                    }
                                })}
                                type="password" placeholder="Enter Your Password"
                                className="input input-bordered w-full rounded-none text-lg"

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='py-3 px-8 text-lg mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-full' type="submit" value='SIGN UP' />
                        <p className='mt-6 text-sm'>Already have an account? <Link className='text-primary' to='/login'>please Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;