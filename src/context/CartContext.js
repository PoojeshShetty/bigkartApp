import {useReducer, createContext} from 'react'
import { CartReducer, initialCart } from '../reducer/CartReducer'

export const CartContext = createContext()

function CartContextProvider({children}) {

    const [cartState, cartDispatch] = useReducer(CartReducer, initialCart)

    return (
        <CartContext.Provider value={{...cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
