import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <form class="w-full max-w-sm mx-auto my-36 glass pr-11 pt-9">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Email
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input readOnly defaultValue={user.email} name="email" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" />
                </div>
            </div>


            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input defaultValue={user?.displayName} name="name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        PhotoURL
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input defaultValue={user?.photoURL} name="photoURL" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>

            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
            </div>
        </form>
    );
};

export default Profile;