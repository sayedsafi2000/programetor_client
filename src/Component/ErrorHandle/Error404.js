import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='w-9/12 mx-auto text-center'>
            <h2 className='text-5xl font-extrabold text-indigo-700'>404 Not found</h2>
            <ExclamationCircleIcon className='lg:w-[50%] md:w-full lg:relative lg:left-64 md:static md:text-center text-indigo-700'></ExclamationCircleIcon>
            <button className='p-5 hover:bg-indigo-800 duration-200 hover:text-white text-indigo-900 border-2 rounded-xl border-indigo-800 mb-10'>
            <Link to={"/"}>Back To Home Page</Link>
            </button>
        </div>
    );
};

export default Error404;