import React from 'react'
import './PriceDetails.css'

function PriceDetails({productInCart}) {

    const item = productInCart.length
    let totalCost = productInCart.reduce((acu, product) => {
        return acu + product.cost * product.qt;
    },0)

    let totalCostDiscount = totalCost
    if(totalCost>1200)
        totalCostDiscount = totalCost - 40;

    return (
        <div className="productdetails__container">
            <span className="title">Product Details</span>
            <div className="total__price">
                <div className="price__breakdown">
                    <span>Price ( {item} Items )</span>
                    <span>Rs {totalCost}</span>
                </div>
                {
                    totalCostDiscount !== totalCost
                    &&
                    <div className="price__breakdown">
                        <span>Discount</span>
                        <span>- Rs 40</span>
                    </div>
                }
                <div className="price__breakdown">
                    <span>Delivery Charges</span>
                    <span>Rs 0</span>
                </div>
                <div className="price__breakdown total__amount">
                    <span>Total amount</span>
                    <span>Rs {totalCostDiscount}</span>
                </div>
            </div>
        </div>
    )
}

export default PriceDetails
