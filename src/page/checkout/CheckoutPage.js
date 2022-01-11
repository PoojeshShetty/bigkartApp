import {useState} from 'react'
import EditAddress from '../../component/editAddress/EditAddress'
import PriceDetails from '../../component/pricedetails/PriceDetails'
import ShowAddress from '../../component/showAddress/ShowAddress'
import { useAuth } from '../../hooks/useAuth'
import { useCart } from '../../hooks/useCart'
import { useCartContext } from '../../hooks/useCartContext'
import './CheckoutPage.css'

function CheckoutPage() {

    const [editAddr, setEditAddr] = useState(false)
    const [successPay,setSuccessPay] = useState(null)
    const {cart} = useCartContext()
    const {user} = useAuth()
    const {emptyCart} = useCart()
    
    if(successPay)
    return(
        <div className="page--info">
            Payment was successfull. Product will be dispatched soon.
        </div>
    )

    if(cart.length === 0)
    return (
        <div className="page--info">
            No products in Cart
        </div>
    )
    
    let amount = cart.reduce((acu, product) => {
        return acu + product.cost * product.qt;
    },0)

    if(amount>1200)
        amount = amount - 40;

    const handleSuccessPayment = () => {

        emptyCart()
        
        setSuccessPay(true)
    }

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const displayRazorpay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('You are offline.... failed to load')
            return
        }

        const options = {
            key: "rzp_test_4o3uvRKN3BrjkH",
            currency: "INR",
            amount: amount*100,
            name: "BigKart",
            description: "Thanks",
    
            handler: function (response) {
                handleSuccessPayment()
            }   
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()

    }

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
                    <button className='btn btn--black' onClick={displayRazorpay}>Order</button>
                </div>
            }
        </div>
    )
}

export default CheckoutPage
