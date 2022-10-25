import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const singleCourse = useLoaderData();
    // console.log(singleCourse)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
            <img className="w-full" src={singleCourse.image_url} alt="Sunset in the mountains"/>
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2 text-white">{singleCourse.title}</div>
                    <p className=" text-white">
                        {singleCourse.details}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Price : {singleCourse.price}</span>
                    <button className="btn bg-yellow-600 text-white rounded-3xl px-3 py-1"><Link to={`/checkout/${singleCourse.id}`}>Get Premium Access</Link></button>
                </div>
        </div>
    );
};

export default SingleCourse;