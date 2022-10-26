import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const checkout = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className="w-full lg:w-9/12 flex  overflow-hidden p-5 lg:mx-auto gap-10 flex-col lg:flex-row  shadow-lg justify-between">
            <div className='glass w-full lg:w-2/5 rounded-xl'>
                <img className="w-full p-5 rounded-lg" src={checkout.image_url} alt="course" />
                <div className="px-6 py-4 ">
                    <div >
                        <h1 className='text-xl text-yellow-600 font-bold shadow-md'>Product id : {checkout.id}</h1>
                        <h1 className="font-bold text-xl mb-2 text-white">{checkout.title}</h1>
                    </div>
                    <p className=" text-white text-justify">
                        {checkout.details}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Price : {checkout.price}</span>
                    <button className="btn bg-yellow-600 text-white rounded-3xl px-3 py-1"><Link to="/purchase">Purchase</Link></button>
                </div>
            </div>
            <div className='w-full lg:w-2/5'>
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={checkout.image_url} alt="Shoes" /></figure>
                    <div className="card-body text-center mx-auto">
                        <h2 className='text-yellow-500 font-bold text-lg'>Product id : {checkout.id}</h2>
                        <p className='text-yellow-500 font-bold text-lg'>{user.displayName}</p>
                        <img className="w-[100px] h-[100px] rounded-full mx-auto" src={user.photoURL} alt="Sunset in the mountains" />
                        <div className="card-actions flex justify-end items-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-black text-sm font-semibold  mr-2 mb-2">Price : {checkout.price}</span>
                            <button className="btn bg-yellow-600 text-white rounded-3xl px-3 py-1"><Link to="/purchase">Purchase</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;