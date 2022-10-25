import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Hero/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;