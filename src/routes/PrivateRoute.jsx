import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import lottie from '../lottie/lottie.json'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <Lottie className='w-1/2 mx-auto' animationData={lottie} loop={true} />;
// this is loader 
    }

    if(user){
        return children
    }
    
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;