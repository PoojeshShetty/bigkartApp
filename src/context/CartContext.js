import {useReducer, createContext,useEffect} from 'react'
import { cartReducer, initialCart } from '../reducer/CartReducer'
import { projectFirestore } from '../config/firebase'
import { useAuth } from '../hooks/useAuth'

export const CartContext = createContext()

function CartContextProvider({children}) {

    const [cartState, cartDispatch] = useReducer(cartReducer, initialCart)
    const {user} = useAuth()

    useEffect(()=>{

        if(!user) return
        const getCartItems = async () => {
            const res = await projectFirestore.collection(`carts/${user.uid}/products`).get()
            let result = []
            if(!res.empty)
            {
                res.docs.forEach(doc => result.push({docId:doc.id,...doc.data()}))
                console.log({result})
                cartDispatch({type:'UPDATE_CART_SERVER',payload:result})
            }
        }

        const getWishlistItems = async () => {
            const res = await projectFirestore.collection(`wishlist/${user.uid}/products`).get()
            let result = []
            if(!res.empty)
            {
                res.docs.forEach(doc => result.push({docId:doc.id,...doc.data()}))
                console.log({result})
                cartDispatch({type:'UPDATE_WISHLIST_SERVER',payload:result})
            }
        }

        getCartItems()
        getWishlistItems()

    },[user])

    return (
        <CartContext.Provider value={{...cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
