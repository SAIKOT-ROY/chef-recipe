import React from 'react';
import Navbar from '../../shared/Nav/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Foot/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-150px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;