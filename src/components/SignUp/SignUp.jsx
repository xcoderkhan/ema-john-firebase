import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center p-6 py-12 lg:px-8">
                <div>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold loading-9 tracking-tight text-gray-900">
                            Signup your account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
                                <div className="mt-2">
                                    <input type="email" name="email" autoComplete="email" placeholder='Input your email' required className="block w-full rounded-md border-0 py-1 5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-200 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input type="password" name="password" autoCapitalize="current-password" placeholder="Input your password" required className="block w-full rounded-md border-0 py-1 5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-200 sm:text-sm sm:leading-6" />
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                </div>
                                <div className="mt-2">
                                    <input type="password" name="confirmpassword" autoCapitalize="confirm-password" placeholder="Input your password" required className="block w-full rounded-md border-0 py-1 5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-200 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-cyan-300 px-3 py-1 5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-400">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-4 grid grid-cols-3 items-center sm:mx-auto sm:w-full sm:max-w-sm">
                        <hr className=" border-gray-300" />
                        <p className="text-center text-cyan-300">Or</p>
                        <hr className=" border-gray-300" />
                    </div>
                    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                        <button type="submit" className="flex w-full justify-center rounded-md bg-cyan-300 px-3 py-1 5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-400">Sign with Google</button>
                    </div>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-cyan-300 hover:text-red-200">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default SignUp;