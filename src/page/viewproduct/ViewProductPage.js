import React from 'react'
import './ViewProductPage.css'

const initialProduct = {
    id:1,
    image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
    name: 'Shirt checks',
    gender: 'male',
    cost: '2300',
    status: 'available',
    brand: 'Nike'
}

function ViewProductPage() {
    return (
        <div className="viewproduct__container">
            <div className="viewproduct">
                <div className="viewproduct__img">
                    <img src={initialProduct.image} alt={initialProduct.name} />
                </div>
                <div className="viewproduct__info">
                    <div className="viewproduct__name">
                        {initialProduct.name}
                    </div>
                    <div className="viewproduct__brand">
                        {initialProduct.brand}
                    </div>
                    <div className="viewproduct__description">
                        <span>Description</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officiis quasi eaque, quaerat accusantium libero nostrum facilis. Quia vitae minima, reprehenderit velit facere cupiditate deserunt dicta, incidunt commodi optio repudiandae.</p>
                    </div>
                    <div className="viewproduct__cost">
                        Rs {initialProduct.cost}
                    </div>
                    <button className="btn btn--black">
                        Cart
                    </button>
                    
                </div>
                <div className="viewproduct__wish viewproduct--inwish">   
                    <img src="/svg/wish_btn.svg" alt="" />    
                </div>
            </div>
        </div>
    )
}

export default ViewProductPage
