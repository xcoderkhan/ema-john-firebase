import React, { useContext } from 'react';
import { AuthContext } from '../../auth/Provider/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <></>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;