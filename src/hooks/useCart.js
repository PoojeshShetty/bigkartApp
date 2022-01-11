import {useState, useEffect} from 'react'
import { useAuth } from './useAuth'
import { useCartContext } from './useCartContext'
import useCollection from './useCollection'

function useCart() {
    const [cartError, setCartError] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const { cart,wishlist, cartDispatch } = useCartContext()

    const {user} = useAuth()
    const {addDocumentWithUrlId,updateDocumentWithUrl,deleteDocumentWithUrl,deleteCollection} = useCollection(`carts`)

    useEffect(()=>{

        return () => setCancelled(true)

    },[])

    const addProductToCart = (product) => {
        
        try{

            addDocumentWithUrlId(`carts/${user.uid}/products`,product.id,{...product,qt:1})

            cartDispatch({type:'ADD_TO_CART', payload: {...product, qt: 1}})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const incrProductQt = async (id) => {
        
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

            updateDocumentWithUrl(`carts/${user.uid}/products`,id,{...updateQt})
            
            cartDispatch({type:'INCR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const decrProductQt = (id) => {

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

            updateDocumentWithUrl(`carts/${user.uid}/products`,id,{...updateQt})
            
            cartDispatch({type:'DECR_PRODUCT_QT', payload: cartList })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const deleteProduct = (id) => {

        setCartError(null)

        try{
            
            let cartList = cart.filter(prod => prod.id !== id)

            deleteDocumentWithUrl(`carts/${user.uid}/products`,id)

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

            addDocumentWithUrlId(`wishlist/${user.uid}/products`,product.id,{...product})

            cartDispatch({type:'ADD_TO_WISHLIST', payload: product })

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const removeProductWishlist = (product) => {
        
        setCartError(null)

        try{
            
            let newWishlist = wishlist.filter(prod => prod.id !== product.id)
            
            deleteDocumentWithUrl(`wishlist/${user.uid}/products`,product.id)

            cartDispatch({type:'REMOVE_FROM_WISHLIST', payload: newWishlist})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    const emptyCart = async () => {

        setCartError(null)

        try{
            
            deleteCollection(`carts/${user.uid}/products`)

            cartDispatch({type:'EMPTY_CART'})

        }catch(err)
        {
            if(!cancelled)
                setCartError(err.message)
        }
    }

    return {
        addProductToCart,
        incrProductQt,
        decrProductQt,
        deleteProduct,
        addProductWishlist,
        removeProductWishlist,
        emptyCart,
        cartError
    }
}

export {
    useCart
} 
