import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivetRoute = ({children , ...rest}) => {
    const {user, isLoading} = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }
    if(user.email){
        return children
    }
    return <Navigate to="/login" state = {{from:location}}></Navigate>
};

export default PrivetRoute;