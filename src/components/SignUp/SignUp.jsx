import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center p-6 py-12 lg:px-8">
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <Link to="#" className="font-bold text-cyan-300 hover:text-red-200">
                                        Forget Password
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;