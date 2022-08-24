import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const user = useAuthState(auth)
    const location =  useLocation()
    console.log(location);
    if(!user){
        return <Navigate to='/' state={{from: location}} replace/>
    }
    return children
};

export default RequireAuth;