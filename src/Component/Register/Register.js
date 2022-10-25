import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const handleGoogleSignin = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user  = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div class="max-w-xs z-10 mx-auto h-[100vh] mt-20">
                <form onSubmit={handleSubmit} class=" shadow-md rounded px-8 pt-6 pb-8 mb-4 glass ">
                <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Full-Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your full Name" name='name'/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter your email" name='email'/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-white text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" name='password'/>
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center flex-col">
                        <button class=" block btn-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <Link to="/login" class="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-3" >
                            Already have an account?
                        </Link>
                    </div>
                </form>
                <button onClick={handleGoogleSignin} className='btn glass text-white w-full mb-3'><FaGoogle className='text-white mr-1'/>  Sign in with google</button>
                <button className='btn bg-gray text-white w-full mb-3'><FaGithub className='text-white mr-1 ' />  Sign in with gitHub</button>
                <p class="text-center  text-yellow-700 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Register;