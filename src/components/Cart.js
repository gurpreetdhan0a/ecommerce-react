import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem } from '../actions';

class Cart extends Component {
    renderStars(item){
        let ratings = [];
        for(let i=0; i < item.rating; i++){
         ratings.push(<span key={i} className="fa fa-star checked"></span>);
        }
        return ratings;
    }

    getTotal(){
        return this.props.cart.reduce(function(acc, cart){
            return  acc + cart.newPrice * cart.quantity;
        },0)
    }

    renderCartItems(){
        return this.props.cart.map((item, index) =>{
            return (
                <div className="card" key={index}>
                    <img src={item.img} alt="product"/>
                    <div className="card-info">
                        <h2>{item.brand}</h2>
                        <p>{item.text}</p>
                        <div>
                        {this.renderStars(item)}
                        </div>
                        <div className="price-box">
                            <span className="new-price">${item.newPrice * item.quantity}</span>
                        </div>
                        <h3>Quantity : {item.quantity}</h3>
                        <button onClick={()=>this.props.removeItem(item.id)} className="ui red button">Remove item</button>    
                    </div>
                </div> 
            )
        })
    }

    render() {
        if(this.props.cart.length ===0){
            return (
            <div className="text-center cart-margin">
            <h1>Your cart is empty</h1>
            <Link to="/products" className="ui secondary button"> Continue Shopping</Link>
            </div>
            )}
        return (
        <React.Fragment>
            <div className="text-center">
            <h1 className="background">Shopping cart</h1>
            <Link to="/products" className="ui secondary button"> Continue Shopping</Link>
            </div>
            <div className="products cart-grid">
                <div className="menu grid grid-3">
                {this.renderCartItems()}
                </div>
                <div className = 'border-left text-center'>
                    <h2 className="background">Subtotal</h2>
                    <h3>${this.getTotal()}</h3>
                    <h5>Add comments</h5>
                    <textarea></textarea>
                    <Link to={{
                        pathname:"/checkout",
                        state : {
                            total : this.getTotal()
                        }
                    }} className="ui green button"> Proceed to Checkout</Link>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        cart: state.cart
    }
}
export default connect(mapStateToProps, {removeItem})(Cart);