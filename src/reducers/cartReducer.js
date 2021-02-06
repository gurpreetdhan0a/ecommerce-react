
const cartReducer =  (state=[], action )=>{
    switch (action.type) {
        case 'SHOPPING_CART':
            return [...state, action.payload]
        case 'REMOVE_ITEM':{
           return [...state.filter(item =>
               action.payload !== item.id
           )]
        }
        default:
            return state;
    }
}

export default cartReducer;