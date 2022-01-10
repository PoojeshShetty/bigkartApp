import {useState, useEffect} from 'react'
import { useAuth } from './useAuth'
import { useCartContext } from './useCartContext'
import useCollection from './useCollection'
import { useLoadingUtils } from './useLoadingUtils'

function useCart() {
    const [cartError, setCartError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const { cart,wishlist, cartDispatch } = useCartContext()
    const { setLoading, setLoaded}  = useLoadingUtils()

    const {user} = useAuth()
    const {addDocumentWithUrl} = useCollection(`carts`)

    useEffect(()=>{

        return () => setCancelled(true)

    },[])

    const addProductToCart = (product) => {
        
        try{

            addDocumentWithUrl(`carts/${user.uid}/products`,{...product,qt:1})
            
            cartDispatch({type:'ADD_TO_CART', payload: {...product, qt: 1}})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const incrProductQt = (id) => {
        
        setLoading()
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
            setTimeout(()=> setLoaded(),5000)
        }
    }

    const decrProductQt = (id) => {
        setLoading()
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
            setTimeout(()=> setLoaded(),5000)
        }
    }

    const deleteProduct = (id) => {
        setLoading()
        setCartError(null)

        try{
            
            let cartList = cart.filter(prod => prod.id !== id)
            cartDispatch({type:'DECR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            setTimeout(()=> setLoaded(),5000)
        }
    }

    const addProductWishlist = (product) => {
        setLoading()
        setCartError(null)

        try{
            
            cartDispatch({type:'ADD_TO_WISHLIST', payload: product })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            setTimeout(()=> setLoaded(),5000)
        }
    }

    const removeProductWishlist = (product) => {
        setLoading()
        setCartError(null)

        try{
            
            let newWishlist = wishlist.filter(prod => prod.id !== product.id)

            cartDispatch({type:'REMOVE_FROM_WISHLIST', payload: newWishlist})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }finally{
            
            setTimeout(()=> setLoaded(),5000)
        }
    }

    return {
        addProductToCart,
        incrProductQt,
        decrProductQt,
        deleteProduct,
        addProductWishlist,
        removeProductWishlist,
        cartError
    }
}

export {
    useCart
} 
