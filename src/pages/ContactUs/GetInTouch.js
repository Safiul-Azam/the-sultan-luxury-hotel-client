import React from 'react';
import { useForm } from 'react-hook-form';
import { FiPhoneCall } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { MdLocationSearching } from 'react-icons/md';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='container mx-auto py-24 px-4'>
            <div className='lg:flex lg:space-x-32'>
                <div className=''>
                    <h2 className='lg:text-3xl text-2xl mb-7 text-black'>The Cappa Luxury Hotel</h2>
                    <p className='text-lg mb-4 text-gray-500'>Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                    <div className=' space-y-6'>
                        <div className='flex justify-start items-center'>
                            <FiPhoneCall className='text-4xl mr-8 text-primary' />
                            <Link to='/' className='text-xl text-gray-700'>Reservation <p className='block text-3xl text-primary tracking-wide'>855 100 4444</p></Link>
                        </div>
                        <div className='flex justify-start items-center'>
                            <BsEnvelope className='text-4xl mr-8 text-primary' />
                            <Link to='/' className='text-lg text-gray-700'>Email Info<p className='block text-xl text-primary tracking-wide'>sultan@luxuryhotel.com</p></Link>
                        </div>
                        <div className='flex justify-start items-center'>
                            <MdLocationSearching className='text-4xl mr-8 text-primary' />
                            <Link to='/' className='text-xl text-gray-700'>Address
                                <p className='text-lg'>1616 Broadway NY, New York 10001</p>
                                <p className='text-lg'>United States of America</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-2xl text-center text-black mt-10'>Get in touch</h2>
                    <hr className='w-3/4 lg:w-1/2 border-primary mx-auto mt-4 mb-10'/>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        <div className='lg:flex lg:space-x-4'>
                            <div className="form-control w-full">
                                <input
                                    {...register('displayName', {
                                        required: {
                                            value: true,
                                            message: 'name is required'
                                        }
                                    })}
                                    type="text" placeholder="Your Name"
                                    className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full">
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
                                    className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='lg:flex lg:space-x-4'>
                            <div className="form-control w-full">
                                <input
                                    {...register('number', {
                                        required: {
                                            value: true,
                                            message: 'number is required'
                                        }
                                    })}
                                    type="number" placeholder="Your number"
                                    className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                                />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-error">{errors.number.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <input
                                    {...register('subject', {
                                        required: {
                                            value: true,
                                            message: 'subject is required'
                                        }
                                    })}
                                    type="text" placeholder="Enter Your subject"
                                    className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                                />
                                <label className="label">
                                    {errors.subject?.type === 'required' && <span className="label-text-alt text-error">{errors.subject.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <textarea
                                {...register('message', {
                                    required: {
                                        value: true,
                                        message: 'message is required'
                                    }
                                })}
                                type="text" placeholder="message"
                                className="textarea border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                                rows='3'

                            ></textarea>
                            <label className="label">
                                {errors.message?.type === 'required' && <span className="label-text-alt text-error">{errors.message.message}</span>}
                            </label>
                        </div>

                        <input className='py-3 w-1/2 mx-auto mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500' type="submit" value='SEND MESSAGE' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;