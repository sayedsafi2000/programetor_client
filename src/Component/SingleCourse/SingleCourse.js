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
                <h2 className='font-bold text-md mb-2 text-yellow-500'>Course name : {singleCourse.name}
                    <span className='m-3'>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}><FaDownload className='white ' /></button>}
                        </Pdf>
                    </span>
                </h2>
                <div className="font-bold text-xl mb-2 text-yellow-500">{singleCourse.title}</div>
                <p className=" text-yellow-500 text-justify">
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