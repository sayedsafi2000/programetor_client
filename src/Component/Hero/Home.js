import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse  w-8/12 justify-between">
                <Login></Login>
                <div className='lg:w-1/2'>
                    <h1 className=" lg:text-5xl md:text-2xl font-bold text-yellow-500 ">Want's to learn Programming!</h1>
                    <p className="  text-yellow-500 py-6">We are providing best courses for you.If you want to learn something beyond the text-books then our course is perfect for you.To enroll our course then click down below.</p>
                    <button className="btn btn-primary hover:btn-warning"><Link to="/course"> Our Courses</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;