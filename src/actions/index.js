import {products} from '../data/db.json'

export const signIn =(userId, username) =>{
    return {
        type: 'SIGN_IN',
        payload: userId,
        username: username
    } 
}

export const signOut = ()=>{
    return {
        type: 'SIGN_OUT'
    }
}

export const cart = (product) =>{
    return {
        type: 'SHOPPING_CART',
        payload: product
    }
}

export const removeItem = (productId) =>{
    return {
        type:'REMOVE_ITEM',
        payload: productId
    }
}

export const fetchProducts = () =>{
    return {
        type:'FETCH_PRODUCTS',
        payload : products
    }
}

export const fetchProduct = (id) =>{
    return {
        type: "FETCH_PRODUCT",
        payload: products,
        id:id
    }
} 