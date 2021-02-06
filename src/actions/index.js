import products from '../apis/products';

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
    return async (dispatch) =>{
        const response = await products.get('/products');
        dispatch({type: 'FETCH_PRODUCTS', payload: response.data})
    }
}

export const fetchProduct = (id) =>{
    return async (dispatch) =>{
        const response = await products.get(`/products/${id}`)
        dispatch({type: 'FETCH_PRODUCT', payload: response.data})
    }
} 