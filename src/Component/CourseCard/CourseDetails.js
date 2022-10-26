import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    
    return (
        <div  className="card w-80  glass mx-auto mt-5 shadow-sm">
            <figure className=" pt-10 ">
                <img src={course.image_url} alt="Shoes" className="h-[200px] rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-yellow-600">{course.name} <span>
                    
                </span></h2>

                <div className="card-actions">
                    <Link to={`/course/${course.id}`}><button className="btn btn-primary">Click For buy</button></Link>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;