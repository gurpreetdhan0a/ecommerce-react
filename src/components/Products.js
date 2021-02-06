import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, cart } from '../actions';
import { Link } from 'react-router-dom';
import ProductsHeader from './ProductsHeader';

class Products extends React.Component {
    state={
        newState: []
    }
    componentDidMount(){
        this.props.fetchProducts();
    }

    renderStars(product){
        let ratings = [];
        for(let i=0; i < product.rating; i++){
         ratings.push(<span key={i} className="fa fa-star checked"></span>);
        }
        return ratings;
    }

    renderProducts(){
        if(!this.props.products){
            return (
               <div>...Loading</div>
            );
    }
        return this.props.products.map(product =>{
            return (
                <div className="card" key={product.id}>
                    <img src={product.img} alt="product"/>
                    <div className="card-info">
                        <h2>{product.brand}</h2>
                        <p>{product.text}</p>
                        <div>
                        {this.renderStars(product)}
                        </div>
                        <div className="price-box">
                            <span className="old-price">${product.oldPrice}</span>
                            <span className="new-price">${product.newPrice}</span>
                        </div>
                        <Link to={`/product/${product.id}`} className="ui secondary button">Show Product Details</Link>
                    </div>
                </div> 
            )
        })
    }

    render(){
    return (
        <div>
        <ProductsHeader />
        <div className="products">
        <h1 className="text-center">Featured Products</h1>
            <div className="menu grid grid-3">
               {this.renderProducts()}
            </div>
        </div>
        </div>
    );
};
}

const mapStateToProps = (state) =>{
    return {
        products: Object.values(state.products)
    }
}
export default connect(mapStateToProps, {fetchProducts, cart})(Products);