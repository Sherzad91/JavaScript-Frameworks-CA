// shared layout for all pages
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';

const SharedLayout = () => {
    return (
        <div >
                <Navbar />
                <div style={{
                    minHeight: '80vh'
                }}>
                <Outlet />
                </div>
                <Footer />


        </div>
    );
}

export default SharedLayout;