import React from 'react';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse  w-8/12 justify-between">
                <Login></Login>
                <div className='lg:w-1/2'>
                    <h1 className=" lg:text-5xl md:text-2xl font-bold">Want's to learn Programming!</h1>
                    <p className="py-6">We are providing best courses for you.If you want to learn something beyond the text-books then our course is perfect for you.To enroll our course then click down below.</p>
                    <button className="btn btn-primary">Our Courses</button>
                </div>
            </div>
        </div>
    );
};

export default Home;