import React, { useContext } from 'react';
import { AuthContext } from '../../auth/Provider/AuthProvider/AuthProvider';

const Checkout = () => {

    const { user } = useContext(AuthContext);
    

    return (
        <div>
            <h2>Checkout your order!!! page </h2>
        </div>
    );
};

export default Checkout;