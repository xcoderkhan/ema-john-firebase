import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/Provider/AuthProvider/AuthProvider';

const Header = () => {

    const { user, loggedOut } = useContext(AuthContext);

    const handleLoggedOut = () => {
        loggedOut()
            .then((result) => {

            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                {
                    user && <span className='text-white p-2'>{user.email}<button onClick={handleLoggedOut} className=' px-2 mx-2 rounded-lg bg-red-300'>Logged Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;