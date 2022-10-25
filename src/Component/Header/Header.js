import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="flex justify-between mx-auto p-4 shadow-lg">
                <div className="flex">
                    <img className='w-[60px]' src='logo.png' alt='logo'/>
                    <NavLink to={"/"}><h2 className=' text-yellow-600 text-3xl font-bold'>Programetor</h2></NavLink>
                </div>
                <div>
                    <ul className={` lg:flex sm:block justify-end list-none lg:static duration-300 ease-in absolute  ${open ? "top-[70px] right-[0px]" : "top-[-150px] right-[0px]"}`}>
                        <li className='mr-8 mb-3  text-yellow-600 '> <NavLink to={"/course"}
                            className={({ isActive }) =>
                                isActive ? "text-white" : undefined}>Course</NavLink></li>
                        <li className='mr-8 text-yellow-600 '> <NavLink to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "text-white" : undefined}>Blog</NavLink></li>
                        <li className='mr-8 text-yellow-600 '> <NavLink to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "text-white" : undefined}>FAQ</NavLink></li>
                    </ul>
                    <div onClick={() => setOpen(!open)} className='h-6 w-6 text-black-500 md:hidden ease-in'>
                        {
                            open ? <XMarkIcon className='text-yellow-500'/> : <Bars3Icon className='text-yellow-500'/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;