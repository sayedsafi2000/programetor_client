import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="flex justify-between mx-auto p-4 shadow-lg">
                <div className="flex">
                    <img src='logo.png' alt='logo'/>
                    <NavLink to={"/"}><h2 className='text-3xl text-indigo-800 font-bold'>Programetor</h2></NavLink>
                </div>
                <div>
                    <ul className={` lg:flex sm:block justify-end list-none lg:static duration-300 ease-in absolute  ${open ? "top-[70px] right-[0px]" : "top-[-150px] right-[0px]"}`}>
                        <li className='mr-8 mb-3 '> <NavLink to={"/home"}
                            className={({ isActive }) =>
                                isActive ? "text-[#5025D4]" : undefined}>Course</NavLink></li>
                        <li className='mr-8'> <NavLink to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "text-[#5025D4]" : undefined}>Blog</NavLink></li>
                        <li className='mr-8'> <NavLink to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "text-[#5025D4]" : undefined}>FAQ</NavLink></li>
                    </ul>
                    <div onClick={() => setOpen(!open)} className='h-6 w-6 text-black-500 md:hidden ease-in'>
                        {
                            open ? <XMarkIcon /> : <Bars3Icon />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;