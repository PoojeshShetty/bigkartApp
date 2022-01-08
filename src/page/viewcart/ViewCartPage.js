import React from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../../component/cartproduct/CartProduct'
import PriceDetails from '../../component/pricedetails/PriceDetails'
import { useCartContext } from '../../hooks/useCartContext'
import './ViewCartPage.css'


function ViewCartPage() {

    const {cart} = useCartContext()

    return (
        <div className="viewcart__container">
            <div className="viewcart__product">
                {cart
                    .map(product => 
                        <CartProduct product={product} key={product.id}/>
                        )
                    }
            </div>

            <div className="viewcart__pricedetails">
                <PriceDetails productInCart={cart}/>
                { cart.length > 0 &&
                <Link to="/checkout" className='btn btn--black'>
                    Checkout
                </Link>
                }
            </div>
        </div>
    )
}

export default ViewCartPage
