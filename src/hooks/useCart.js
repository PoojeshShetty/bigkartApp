import {useState, useEffect} from 'react'
import { useAuth } from './useAuth'
import { useCartContext } from './useCartContext'
import useCollection from './useCollection'
import { useLoading } from './useLoading'
import { useLoadingUtils } from './useLoadingUtils'

function useCart() {
    const [cartError, setCartError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const { cart,wishlist, cartDispatch } = useCartContext()
    const { setLoading, setLoaded}  = useLoadingUtils()

    const {user} = useAuth()
    const {addDocumentWithUrl,updateDocumentWithUrl,deleteDocumentWithUrl} = useCollection(`carts`)

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

    const incrProductQt = async (id,docId) => {
        
        setCartError(null)

        try{

            let updateQt = {}
            let cartList = cart.map(prod => {
                if(prod.id === id)
                    {
                        updateQt = {qt:prod.qt+1}
                        return {...prod, qt:prod.qt+1}
                    }
                return prod
            })

            updateDocumentWithUrl(`carts/${user.uid}/products`,docId,{...updateQt})
            
            cartDispatch({type:'INCR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const decrProductQt = (id, docId) => {

        setCartError(null)

        try{

            let updateQt = {}

            let cartList = cart.map(prod => {
                if(prod.id === id)
                {
                    updateQt = {qt:prod.qt-1}
                    return {...prod, qt:prod.qt-1}
                }
                return prod
            })

            updateDocumentWithUrl(`carts/${user.uid}/products`,docId,{...updateQt})
            
            cartDispatch({type:'DECR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const deleteProduct = (id,docId) => {

        setCartError(null)

        try{
            
            let cartList = cart.filter(prod => prod.id !== id)

            deleteDocumentWithUrl(`carts/${user.uid}/products`,docId)
            
            cartDispatch({type:'DECR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const addProductWishlist = (product) => {
        
        setCartError(null)

        try{

            addDocumentWithUrl(`wishlist/${user.uid}/products`,{...product})

            cartDispatch({type:'ADD_TO_WISHLIST', payload: product })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
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
