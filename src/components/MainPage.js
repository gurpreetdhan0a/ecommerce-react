import React from 'react';
import Products from './Products';
import {Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="flex">
            <div className="main-page">
            <div className="main-img">
                <div className="heading">
                <h1 style={{fontSize:"52px"}}>SPRING SUMMER</h1>
                <p>Dosuere an morci lobortis scelerisque blandit cosmopolis de metropolitan.</p>
                <Link to="/products" className="ui secondary button"> Shop the collection</Link>
                </div>
            </div>
            </div>
            <Products />
        </div>
    );
};

export default MainPage;