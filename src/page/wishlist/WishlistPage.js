import React from 'react'
import Product from '../../component/product/Product'
import './WishlistPage.css'

function WishlistPage() {
    return (
        <div className="wishlist__container">
            <div className="wishlist__product">
                <Product />
                <Product />
                
            </div>
        </div>
    )
}

export default WishlistPage
