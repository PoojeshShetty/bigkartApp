import React from 'react'
import './PriceDetails.css'

function PriceDetails({productInCart}) {
    return (
        <div className="productdetails__container">
            <span className="title">Product Details</span>
            <div className="total__price">
                <div className="price__breakdown">
                    <span>Price ( 2 Items )</span>
                    <span>Rs 20000</span>
                </div>
                <div className="price__breakdown">
                    <span>Discount</span>
                    <span>- Rs 40</span>
                </div>
                <div className="price__breakdown">
                    <span>Delivery Charges</span>
                    <span>Rs 0</span>
                </div>
                <div className="price__breakdown total__amount">
                    <span>Total amount</span>
                    <span>Rs 19960</span>
                </div>
            </div>
        </div>
    )
}

export default PriceDetails
