import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import TopNav from '../Nav/TopNav';
import Nav from './../Nav/Nav';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;