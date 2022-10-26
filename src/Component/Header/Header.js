import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const logOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="flex justify-between mx-auto p-4 shadow-lg">
                <div className="flex">
                    <img className='w-[60px]' src="https://i.ibb.co/4f4J3Pb/logo.png" alt='logo' />
                    <NavLink to={"/"}><h2 className=' text-yellow-600 text-3xl font-bold'>Programetor</h2></NavLink>
                </div>
                <div className=''>
                    <ul className={`z-10 rounded-md px-5 py-3 glass lg:flex sm:block justify-end items-center list-none lg:static duration-300 ease-in-out absolute  ${open ? "top-[70px] right-[00px] px-5 w-full" : "top-[-200px] right-[0px] w-full"}`}>
                        <li className='mr-8  text-yellow-600 '> <NavLink to={"/course"}
                            className={({ isActive }) =>
                                isActive ? "text-white" : undefined}>Course</NavLink></li>
                        <li className='mr-8 text-yellow-600 '> <NavLink to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "text-white" : undefined}>Blog</NavLink></li>
                        <li className='mr-8 text-yellow-600 '> <NavLink to={"/blog"}
                            className={({ isActive }) =>
                                isActive ? "text-white " : undefined}>FAQ</NavLink></li>
                        {user?.uid ?
                            <>
                                <li><Link onClick={logOut} className='mr-5  text-yellow-600'>Sign Out</Link></li>
                                <li><span className='mr-5  text-yellow-600'>{user.displayName}</span></li>
                            </>
                            :
                            <>
                                <li><Link className='mr-5 text-yellow-600'  to={"/login"}>Log in</Link></li>
                                <li><Link className='mr-5 text-yellow-600'  to={"/register"}>Register</Link></li>
                            </>
                        }
                        {
                            user?.photoURL ?
                                <div className="dropdown dropdown-hover">
                                    <li tabIndex={0} className="relative">
                                        <img className='w-[30px] mx-auto rounded-[50%]' src={user?.photoURL} alt="" />
                                        <ul tabIndex={0} className="z-10 w-1/2 dropdown-content menu shadow rounded-box absolute top-[50px] right-[150px]">
                                            <Link className='text-yellow-600'>{user.displayName}</Link>
                                            <Link className='text-yellow-600'>{user.email}</Link>
                                        </ul>
                                    </li>
                                </div>
                                :
                                <li><FaUser className=' text-yellow-600'></FaUser></li>
                        }
                    </ul>
                    <div onClick={() => setOpen(!open)} className='h-6 w-6 text-black-500 md:hidden ease-in'>
                        {
                            open ? <XMarkIcon className='text-yellow-500' /> : <Bars3Icon className='text-yellow-500' />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;