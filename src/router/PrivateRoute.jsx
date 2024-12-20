import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <p className='text-center text-2xl my-10 font-bold'>Loading...</p>
    }
    
    if(user){
        return children
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;