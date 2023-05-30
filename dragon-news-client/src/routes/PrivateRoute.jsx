import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center mt-5'>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
        </div>
    }
    else if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>;
};

export default PrivateRoute;

/**
 * ---------------
 *      Steps
 * ---------------
 * 1. Check if the user is logged in
 * 2. if user is logged in then allow the user to visit the private route
 * 3. else redirect the user to the login route
 * 4. setup private router
 * 5. handle
 * **/ 