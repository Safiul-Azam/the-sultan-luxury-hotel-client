import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import Authentication from './Authentication';
import Spinner from '../Shared/Spinner'

const Login = () => {
    const [credentials, setCredentials] = useState({
        userName: undefined,
        password: undefined,
    })
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/'
    const { loading, error, dispatch } = useContext(AuthContext)

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' })
        try {
            const res = await axios.post('https://sultan-hotel-1.onrender.com/api/auth/login', credentials)
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
            navigate(from, { replace: true })
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
        }
    }
    if(loading){
        return <Spinner/>
    }
    return (
        <>
            <Authentication></Authentication>
                <div className='lg:w-1/2 md:w-1/2 w-full mx-auto lg:p-10 p-3  my-12'>
                    <h2 className="lg:text-4xl text-3xl text-gray-500 lg:text-left text-center">Login</h2>
                    <hr className='lg:w-1/4 w-3/4 mb-6 mt-3 border bg-gray-300 mx-auto lg:mx-0' />
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <input
                                type="text"
                                id="userName"
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"
                            />
                        </div>
                        <div className="form-control w-full ">
                            <input
                                type="password"
                                id="password"
                                onChange={handleChange}
                                placeholder="Enter Your Password"
                                className="input border-b-gray-300 outline-0 focus:outline-none focus:border-b-primary text-lg border-x-0 border-t-0 w-full rounded-none"

                            />
                        </div>
                        {error && <p className='text-red-400'>{error.message}</p>}
                        <input className='input lg:py-3 text-sm mt-2 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-1/2 lg:w-1/3' type="submit" value='LOGIN' />
                        <p className='text-sm mt-6'>New to Wooden tools? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                    </form>
                </div>
        </>
    );
};

export default Login;