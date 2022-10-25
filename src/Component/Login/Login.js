import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
const Login = () => {
    const { providerLogin,signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleLoginSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset();
        })
        .catch(error=>{
            console.log(error)
            toast(error)
        })
    }
    return (
        <div>
            <div className="max-w-xs z-10 mx-auto h-[100vh] mt-36">
                <form onSubmit={handleLoginSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 glass ">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Email/Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" name='email' id="username" type="email" placeholder="Enter your email"  />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" name='password' id="password" type="password" placeholder="************"  />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <button  className=" block btn-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                           Log In
                        </button>
                        <Link to="/register" className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-3" >
                            Create Your Account
                        </Link>
                    </div>
                </form>
                <button onClick={handleGoogleSignin} className='btn glass text-white w-full mb-3'><FaGoogle className='text-white mr-1' />  Sign in with google</button>
                <button className='btn bg-gray text-white w-full mb-3'><FaGithub className='text-white mr-1 ' />  Sign in with gitHub</button>
                <p className="text-center  text-yellow-700 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;