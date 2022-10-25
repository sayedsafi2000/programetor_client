import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={singleCourse.image_url} alt="Sunset in the mountains"/>
                <div className="px-6 py-4 ">
                    <div className="font-bold text-xl mb-2 text-white">{singleCourse.title}</div>
                    <p className=" text-white">
                        {singleCourse.details}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#winter</span>
                </div>
        </div>
    );
};

export default SingleCourse;