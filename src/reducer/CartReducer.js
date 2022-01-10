
const cartReducer = (state, action) => {
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
        case 'SORT':
            return {...state, sort: action.payload}
        case 'ADD_BRAND_NAME':
            return {...state, brand: action.payload}
        case 'REMOVE_BRAND_NAME':
            return {...state, brand: action.payload}
        case 'ADD_TYPE_NAME':
            return {...state, type: action.payload}
        case 'REMOVE_TYPE_NAME':
            return {...state, type: action.payload}
        case 'RESET_FILTER':
            return {...state, type:[], brand:[], sort:''}
        case 'UPDATE_CART_SERVER' :
            return {...state, cart:action.payload}
        case 'UPDATE_WISHLIST_SERVER' :
            return {...state, wishlist:action.payload}
        case 'CLEAR_STATE':
            return {...initialCart}
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
    cartReducer,
    initialCart
} 
