import React from 'react'
import { Link } from 'react-router-dom'
import CartProduct from '../../component/cartproduct/CartProduct'
import PriceDetails from '../../component/pricedetails/PriceDetails'
import './ViewCartPage.css'

const initialProduct = [
    {
        id:1,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:2,
    },
    {
        id:2,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:1,
    },
    {
        id:3,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:4,
    },
    {
        id:4,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike',
        qt:2,
    }
]

function ViewCartPage() {

    
    return (
        <div className="viewcart__container">
            <div className="viewcart__product">
                {initialProduct
                    .map(product => 
                        <CartProduct product={product} key={product.id}/>
                        )
                    }
            </div>

            <div className="viewcart__pricedetails">
                <PriceDetails productInCart={initialProduct}/>
                <Link to="/checkout" className='btn btn--black'>
                    Checkout
                </Link>
            </div>
        </div>
    )
}

export default ViewCartPage
