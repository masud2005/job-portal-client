import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-red-500 text-7xl'>404</h1>
            <p className='text-4xl'>Not Found</p>
            <Link to={'/'} className='border-b border-blue-500 text-green-500 text-2xl'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;