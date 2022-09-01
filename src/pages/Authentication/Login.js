import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import Authentication from './Authentication';

const Login = () => {
    const [credentials, setCredentials] = useState({
        userName: undefined,
        password: undefined,
    })
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/'
    const {user,loading, error, dispatch} = useContext(AuthContext)

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        dispatch({type:'LOGIN_START'})
        try {
            const res =await axios.post('http://localhost:5000/api/auth/login', credentials) 
            dispatch({type:'LOGIN_SUCCESS', payload:res.data})
        } catch (err) {
            dispatch({type:'LOGIN_FAILURE', payload:err.response.data})
        }
    }
    console.log(user);
    return (
        <div>
            <Authentication></Authentication>
            <div className='my-28'>
                <div className='lg:w-1/2 md:w-1/2 w-full mx-auto border p-10  my-28 mb-16'>
                    <h2 className="text-2xl mb-7 text-black">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Your Name</span>
                            </label>
                            <input
                                type="text"
                                id="userName"
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full rounded-none text-lg"
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={handleChange}
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full rounded-none text-lg"

                            />
                        </div>
                        <input className='py-3 px-8 text-lg mt-4 bg-primary hover:bg-[#222222] rounded-none text-white tracking-widest hover:duration-500 hover:ease-in-out ease-in-out duration-500 w-full' type="submit" value='LOGIN' />
                        {error && <span>{error.message}</span>}
                        <p className='text-sm mt-6'>New to Wooden tools? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;