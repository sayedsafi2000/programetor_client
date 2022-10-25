import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const checkout = useLoaderData();
    console.log(checkout)

    return (
        <div className="max-w-sm rounded overflow-hidden glass shadow-lg mx-auto">
            <img className="w-full" src={checkout.image_url} alt="Sunset in the mountains" />
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
    );
};

export default CheckOut;