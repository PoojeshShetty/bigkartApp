import {useState} from 'react'
import EditAddress from '../../component/editAddress/EditAddress'
import PriceDetails from '../../component/pricedetails/PriceDetails'
import ShowAddress from '../../component/showAddress/ShowAddress'
import { useAuth } from '../../hooks/useAuth'
import { useCartContext } from '../../hooks/useCartContext'
import './CheckoutPage.css'

function CheckoutPage() {

    const [editAddr, setEditAddr] = useState(false)
    const {cart} = useCartContext()
    const {user} = useAuth()

    if(cart.length === 0)
    return (
        <div className="page--info">
            No products in Cart
        </div>
    )

    return (
        <div className="checkout__container">
            <div className="product__price">
                <PriceDetails  productInCart={cart} />
            </div>
            <div className="user__address">
                <span>Address : </span>
                <div className="address">
                {
                    editAddr?
                    <EditAddress 
                        address={user.address}
                        setEdit={setEditAddr}
                    /> :
                    <ShowAddress 
                        address={user.address}
                        setEdit={setEditAddr}
                     />
                }
                </div>
            </div>
            {
                user.address.length === 0 ?
                <div> Update address for delivery </div>
                :
                <div className="checkout__order">
                    <button className='btn btn--black'>Order</button>
                </div>
            }
        </div>
    )
}

export default CheckoutPage
