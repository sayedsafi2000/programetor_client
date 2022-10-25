import React from 'react';

const CourseDetails = ({ course }) => {
    return (
        <div className="card w-80  glass mx-auto mt-5">
            <figure className=" pt-10 ">
                <img src={course.image_url} alt="Shoes" className="h-[200px] rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{course.name}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">Click For buy</button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;