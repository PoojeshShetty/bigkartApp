import {useState, useEffect} from 'react'
import { useCartContext } from './useCartContext'

function useCart() {

    const [cartPending, setCartPending] = useState(false)
    const [cartError, setCartError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const { cart,wishlist, cartDispatch } = useCartContext()

    useEffect(()=>{

        return () => setCancelled(true)

    },[])

    const addProductToCart = (product) => {
        
        setCartPending(true)
        setCartError(null)

        try{

            cartDispatch({type:'ADD_TO_CART', payload: {...product, qt: 1}})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            if(!cancelled)
                setTimeout(()=> setCartPending(false),5000)
        }
    }

    const incrProductQt = (id) => {
        
        setCartPending(true)
        setCartError(null)

        try{
            let cartList = cart.map(prod => {
                if(prod.id === id)
                    return {...prod, qt:prod.qt+1}
                return prod
            })
            cartDispatch({type:'INCR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            if(!cancelled)
                setTimeout(()=> setCartPending(false),5000)
        }
    }

    const decrProductQt = (id) => {
        setCartPending(true)
        setCartError(null)

        try{
            let cartList = cart.map(prod => {
                if(prod.id === id)
                    return {...prod, qt:prod.qt-1}
                return prod
            })
            cartDispatch({type:'DECR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            if(!cancelled)
                setTimeout(()=> setCartPending(false),5000)
        }
    }

    const deleteProduct = (id) => {
        setCartPending(true)
        setCartError(null)

        try{
            
            let cartList = cart.filter(prod => prod.id !== id)
            cartDispatch({type:'DECR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            if(!cancelled)
                setTimeout(()=> setCartPending(false),5000)
        }
    }

    const addProductWishlist = (product) => {
        setCartPending(true)
        setCartError(null)

        try{
            
            cartDispatch({type:'ADD_TO_WISHLIST', payload: product })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            if(!cancelled)
                setTimeout(()=> setCartPending(false),5000)
        }
    }

    const removeProductWishlist = (product) => {
        setCartPending(true)
        setCartError(null)

        try{
            
            let newWishlist = wishlist.filter(prod => prod.id !== product.id)

            cartDispatch({type:'REMOVE_FROM_WISHLIST', payload: newWishlist})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            if(!cancelled)
                setTimeout(()=> setCartPending(false),5000)
        }
    }

    return {
        addProductToCart,
        incrProductQt,
        decrProductQt,
        deleteProduct,
        addProductWishlist,
        removeProductWishlist,
        cartPending,
        cartError
    }
}

export {
    useCart
} 
