import React from 'react'
import './Product.css'

const initialProduct = {
    id:1,
    image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
    name: 'Shirt checks',
    gender: 'male',
    cost: '2300',
    status: 'available',
    brand: 'Nike'
}

function Product() {
    return (
        <div className="product__card">
            <div className="product__img">
                <img src={initialProduct.image} alt={initialProduct.name} />
            </div>
            <div className="product__info">
                <div className="product__name">
                    {initialProduct.name}
                </div>
                <div className="product__brand">
                    {initialProduct.brand}
                </div>
                <div className="product__flex">
                    <div className="product__cost">
                        Rs {initialProduct.cost}
                    </div>
                    <button className="btn btn--black">
                        In Cart
                    </button>
                </div>
            </div>

            <div className="product__wish">   
                <img src="/svg/wish_btn.svg" alt="" />    
            </div>
        </div>
    )
}

export default Product
