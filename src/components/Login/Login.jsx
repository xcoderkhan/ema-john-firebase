import React from 'react';
import './Login.jsx'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <h2>Login coming sooon</h2>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-red-300 flex rounded-2xl shadow-lg max-w-3xl">
                    <div className="sm:w-1/2 text-green-800 px-10 pt-5">
                        <h2 className="font-bold text-2x">Login</h2>
                        <p className="text-sm mt-2">If you already register, Login here!!</p>
                        <form action="#" className="flex flex-col gap-3">
                            <input type="email" name="email" placeholder="Input your email" required className="p-2 mt-8 rounded-xl border" />
                            <input type="password" name="password" placeholder="Input your password" className="p-2 rounded-xl border" />
                            <button type="submit" className="bg-cyan-300 text-white">Login</button>
                        </form>

                    </div>
                    <div className="w-1/2 p-5 sm:block hidden">
                        <img src="/src/images/login/login.jpg" alt="Login Image" className="rounded-2xl" />
                    </div>
                </div>

            </section>





            <Link to='/signup'>Sign-Up</Link>
        </>
    );
};

export default Login;