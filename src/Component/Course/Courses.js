import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseCard/CourseDetails';
import "./Courses.css";
const Courses = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='w-9/12 mx-auto'>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="">
                    {
                        courses.map(courseName =><p key={courseName.id}>
                            <Link to={`/course/${courseName.id}`}>
                            <button className="btn btn-wide text-yellow-500 glass my-2">{courseName.name}</button></Link>
                        </p>)
                    }
                </div>
                <div className="col-span-2 courses-part">
                    {
                        courses.map(course=><CourseDetails
                        key={course.id}
                        course={course}
                        ></CourseDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;