import {useContext} from 'react'
import { CartContext } from '../context/CartContext'

function useCartContext() {

    const context = useContext(CartContext)

    if(!context)
        console.log('component should be in CartContext Provider')

    return context
}

export {
    useCartContext
} 
