import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';

class Header extends React.Component{
    render(){
    return (
        <div style={{marginTop:"5px"}} className="ui secondary pointing menu black">
            <Link to="/" className="item">
                Ecommerce App
            </Link>     
        <div className="right menu">
            <GoogleAuth />    
            <Link to="/products" className="item">
                Products
            </Link>     
            <Link to="/cart" className="item">
                Cart <span>
                        <i className="shopping cart icon">
                        <b className="cart-total">{this.props.cart.length}</b>  
                        </i>
                </span>
            </Link>   
        </div>
        </div>
    );
    }
};

const mapStateToProps =(state) => {
    return{
        cart:state.cart
    }
}
export default connect(mapStateToProps, {})(Header);