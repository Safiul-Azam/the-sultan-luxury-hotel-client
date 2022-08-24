import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import Authentication from './Authentication';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const from = location?.state?.from?.pathName || '/'
      let errorMessage;
    if(error){
        errorMessage = <p className='text-red-700'>{error.message}</p>
    }
      if(user){
        navigate(from, {replace:true})
      }
      if(loading){
        return <Spinner></Spinner>
      }
    const onSubmit = data => { 
        signInWithEmailAndPassword(data.email, data.password)
     }
    return (
        <div>
            <Authentication></Authentication>
            <div className='my-28'>
                <div className='lg:w-1/2 md:w-1/2 w-full mx-auto border p-10  my-28 mb-16'>
                    <h2 className="text-2xl mb-7 text-black">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='py-3 px-8 text-lg mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-full' type="submit" value='LOGIN' />
                        <p className='text-sm mt-6'>New to Wooden tools? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;