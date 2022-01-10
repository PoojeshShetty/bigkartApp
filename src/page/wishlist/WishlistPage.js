import React from 'react'
import Product from '../../component/product/Product'
import { useCartContext } from '../../hooks/useCartContext'
import './WishlistPage.css'

function WishlistPage() {

    const {wishlist} = useCartContext()

    return (
        <div className="wishlist__container">
            <div className="wishlist__product">
               
               {wishlist.map(product => (
                   <Product key={product.id} propsProduct={product} />
               ))}
                
            </div>
        </div>
    )
}

export default WishlistPage
