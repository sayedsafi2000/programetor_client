import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseCard/CourseDetails';
import "./Courses.css";
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='w-9/12 mx-auto'>
            <div className="grid grid-cols-3 gap-4">
                <div className="border">
                    {
                        courses.map(courseName =><p key={courseName.id}>
                            <Link to={`/course/${courseName.id}`}>{courseName.name}</Link>
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