import {useReducer, createContext} from 'react'
import { cartReducer, initialCart } from '../reducer/CartReducer'

export const CartContext = createContext()

function CartContextProvider({children}) {

    const [cartState, cartDispatch] = useReducer(cartReducer, initialCart)

    return (
        <CartContext.Provider value={{...cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
