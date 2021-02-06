import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Products';
import MainPage from './MainPage';
import FixedMenuLayout from './FixedMenuLayout';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import Hire from './Hire';

const App = () => {
    return (
        <div className="ui">
        <Router >
            <Navigation/>
            <Route path="/" exact component={MainPage}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/product/:id" exact component={ProductDetail}/>
            <Route path="/hire" exact component={Hire}/>
        </Router>
        <FixedMenuLayout />
        </div>
    );
};

export default App;