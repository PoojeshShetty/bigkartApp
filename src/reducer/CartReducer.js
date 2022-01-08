
const CartReducer = (state, action) => {
    switch(action.type)
    {
        case 'ADD_TO_CART':
            return {...state, cart:state.cart.concat({...action.payload})}
        case 'INCR_PRODUCT_QT':
                return {...state, cart:action.payload}
        case 'DECR_PRODUCT_QT':
                return {...state, cart:action.payload}
        case 'DELETE_FROM_CART':
                return {...state, cart:action.payload}
        case 'ADD_TO_WISHLIST':
            return {...state, wishlist: state.wishlist.concat({...action.payload})}
        case 'REMOVE_FROM_WISHLIST':
            return {...state, wishlist: action.payload}
        default:
            return state
    }
}

const initialCart = {
    cart : [],
    wishlist: [],
    sort : '',
    brand : [],
    type: [],
}

export {
    CartReducer,
    initialCart
} 
