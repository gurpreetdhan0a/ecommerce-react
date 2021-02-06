import React from 'react';
import { connect } from 'react-redux';
import { fetchProduct, cart } from '../actions';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {

    state={
        quantity:1,
        newState: []
    }

    componentDidMount(){
       this.props.fetchProduct(this.props.match.params.id);
       window.scroll(0,0)
    }

    addProductToCart(product){
        const index = this.props.newCart.findIndex(item => item.id === product.id);
        if(index >= 0 )
        {
            const cartProducts = this.props.newCart.slice();
            const existingProduct = cartProducts[index];
            this.setState({newState: [...this.state.newState, existingProduct]})
           
        }else{
            product.quantity = this.state.quantity;
            this.props.cart(product);
        }
    }

    incrementState(){
        this.setState({quantity: this.state.quantity + 1})
    }

    decrementState(){
        if(this.state.quantity > 1){
        this.setState({quantity: this.state.quantity - 1})
        }
    }

    renderStars(product){
        let ratings = [];
        for(let i=0; i < product.rating; i++){
         ratings.push(<span key={i} className="fa fa-star checked"></span>);
        }
        return ratings;
    }

    render(){
    if (!this.props.product){
        return <div>...Loading</div>
    }
    return (
        <div className="product-grid">
            <div>
            <div className="text-center" key={this.props.product.id}>
                    <img src={this.props.product.img} alt="product"/>
                </div> 
            </div>
            <div className="card-info margin-top">
                <h2>Brand Name: {this.props.product.brand}</h2>
                 <p>{this.props.product.text}</p>
                  <div className="price-box">
                   <span className="new-price">${this.props.product.newPrice * this.state.quantity}</span>
                 </div>
                 <div>
                 {this.renderStars(this.props.product)}
                 </div>
                 <h3>Quantity: {this.state.quantity} <button onClick={()=>this.incrementState()}>+</button>  <button onClick={()=>this.decrementState()}>-</button></h3>
                 <Link to={{
                     pathname :"/cart"
                     }}>
                 <button onClick={()=>this.addProductToCart(this.props.product)} className="ui secondary button">Add to cart</button>
                 </Link>
                </div>
        </div>
    );
};
}

const mapStateToProps =(state, ownProps) =>{
    return{
        product : state.products[ownProps.match.params.id],
        newCart : state.cart
    }
}
export default connect(mapStateToProps, {fetchProduct, cart})(ProductDetail);