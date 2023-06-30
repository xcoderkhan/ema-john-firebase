import React, { useContext } from 'react';
import './Login.jsx'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../auth/Provider/AuthProvider/AuthProvider.jsx';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const userSignIn = result.user;
                console.log(userSignIn);
            })
            .catch(error => {
                console.log(error);
                form.reset();
        })
    }

    return (
        <>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="bg-red-300 flex rounded-2xl shadow-lg max-w-5xl">
                    <div className="sm:w-1/2 text-green-800 px-10 pt-5">
                        <h2 className="font-bold text-2x">Login</h2>
                        <p className="text-sm mt-1">If you already register, Login here!!</p>
                        <form onSubmit={handleSignIn} className="flex flex-col gap-3">
                            <input type="email" name="email" placeholder="Input your email" required className="p-2 mt-5 rounded-xl border" />
                            <div className=" relative">
                                <input type="password" name="password" placeholder="Input your password" className="p-2 rounded-xl border w-full" />
                                <>
                                    <FontAwesomeIcon icon={faEye} className=" absolute top-1/2 right-3 -translate-y-1/2" />
                                </>
                            </div>
                            <button type="submit" className="bg-cyan-300 text-white rounded-xl py-2">Login</button>
                        </form>

                        <div className="flex items-center justify-between mt-2">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">If you need to change:</label>
                            <div className="text-sm">
                                <Link to="#" className="font-bold text-white hover:text-red-200">
                                    Forget Password
                                </Link>
                            </div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 items-center text-sm text-green-800">
                            <hr className=" border-green-800" />
                            <p className="text-center">Or</p>
                            <hr className=" border-green-800" />
                        </div>
                        <button type="submit" className=" mt-3 bg-cyan-300 text-white rounded-xl py-2 w-full">Login with Google</button>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not your account?{' '}
                            <Link to="/signup" className="font-semibold leading-6 text-cyan-300 hover:text-red-200">
                                Create an account
                            </Link>
                        </p>
                    </div>
                    <div className="w-1/2 p-5 sm:block hidden">
                        <img src="/src/images/login/login.jpg" alt="Login Image" className="rounded-2xl" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;