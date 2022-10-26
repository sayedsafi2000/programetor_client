import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const SingleCourse = () => {
    const ref = React.createRef();
    const singleCourse = useLoaderData();
    // console.log(singleCourse)
    return (
        <div ref={ref} className="max-w-sm rounded-md overflow-hidden glass shadow-lg mx-auto p-5">
            <img className="w-full" src={singleCourse.image_url} alt="Sunset in the mountains" />
            <div className="px-6 py-4 ">
                <h2 className='font-bold block text-md mb-2 text-yellow-600'>{singleCourse.name}:
                    <span className='m-3'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button className='px-3 py-2 border border-orange-200 rounded-md hover:bg-orange-200 duration-150'  onClick={toPdf}>Download <FaDownload className='white inline' /></button>}
                        </Pdf>
                    </span>
                    </h2>
                <div className="font-bold text-xl mb-2 text-yellow-600">{singleCourse.title}</div>
                <p className=" text-yellow-600 text-center">
                    {singleCourse.details}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">Price : {singleCourse.price}</span>
                <Link to={`/checkout/${singleCourse.id}`}><button className="btn bg-yellow-600 text-white rounded-3xl px-3 py-1">Get Premium Access</button></Link>
            </div>
        </div>
    );
};

export default SingleCourse;