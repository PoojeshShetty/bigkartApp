import React from 'react'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth'
import { useCartContext } from '../../hooks/useCartContext'
import { Link, useHistory } from 'react-router-dom'
import './Product.css'

function Product({propsProduct}) {

    const {cart, wishlist} = useCartContext()
    const { addProductToCart, addProductWishlist,removeProductWishlist } = useCart()
    const history = useHistory()
    const {user} = useAuth()

    const handleAddToCart = (product,e) => {
        e.preventDefault()

        if(!user)
        {
            history.push('/login')
            return 
        }
        addProductToCart(product)
    }

    const handleAddProductToWishlist = (product,e) => {
        e.preventDefault()
        if(!user)
        {
            history.push('/login')
            return 
        }
        addProductWishlist(product)
    }
 
    const handleRemoveProductFromWishlist = (product,e) => {
        e.preventDefault()

        if(!user)
        {
            history.push('/login')
            return 
        }
        removeProductWishlist(product)
    }

    const handleNavigateViewCart = (e) => {
        e.preventDefault()
        history.push('/cart')
    }

    return (
        <Link className="product__card" to={`/viewproduct/${propsProduct.id}`}
        >
            <div className="product__img">
                <img src={propsProduct.image} alt={propsProduct.name} />
            </div>
            <div className="product__info">
                <div className="product__name">
                    {propsProduct.name}
                </div>
                <div className="product__brand">
                    {propsProduct.brand}
                </div>
                <div className="product__flex">
                    <div className="product__cost">
                        Rs {propsProduct.cost}
                    </div>
                    {
                        cart.map(prod => prod.id).includes(propsProduct.id) ?
                        <button className="btn btn--black" onClick={(e)=>handleNavigateViewCart(e)}>
                            In Cart
                        </button> :
                        <button className="btn btn--black" onClick={(e)=>handleAddToCart(propsProduct,e)}>
                            Add to Cart
                        </button>
                    }
                </div>
            </div>
            {
                wishlist.map(prod => prod.id).includes(propsProduct.id) ?
                <div 
                    onClick={(e) => handleRemoveProductFromWishlist(propsProduct,e)}
                    className="product__wish product--inwish">   
                    <img src="/svg/wish_btn.svg" alt="" />    
                </div> :
                <div 
                    onClick={(e) => handleAddProductToWishlist(propsProduct,e)}
                    className="product__wish">   
                    <img src="/svg/wish_btn.svg" alt="" />    
                </div>
            }
            
        </Link>
    )
}

export default Product
